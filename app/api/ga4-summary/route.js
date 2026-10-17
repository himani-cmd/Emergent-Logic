import {
  errorResponse,
  getAccessToken,
  googleJsonPost,
  localDate,
  shiftDate,
  summaryResponse,
} from '@/lib/googleServiceAuth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const SCOPE = 'https://www.googleapis.com/auth/analytics.readonly';
const REPORT_URL = 'https://analyticsdata.googleapis.com/v1beta/properties/530160704:runReport';
const ROW_LIMIT = 50;
const TOP_N = 15;

function metric(row, index) {
  return Number(row.metricValues?.[index]?.value) || 0;
}

function dimension(row, index) {
  return row.dimensionValues?.[index]?.value ?? null;
}

export async function GET() {
  try {
    const token = await getAccessToken(SCOPE);

    const end = localDate(-1);
    const start = shiftDate(end, -27);
    const last7Start = shiftDate(end, -6);
    const dateRanges = [{ startDate: start, endDate: end }];

    const report = (body) => googleJsonPost(REPORT_URL, token, { dateRanges, limit: ROW_LIMIT, ...body });
    const bySessions = [{ metric: { metricName: 'sessions' }, desc: true }];

    const [sourceMedium, campaigns, byDate] = await Promise.all([
      report({
        dimensions: [{ name: 'sessionSource' }, { name: 'sessionMedium' }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: bySessions,
      }),
      report({
        dimensions: [{ name: 'sessionCampaignName' }],
        metrics: [{ name: 'sessions' }],
        orderBys: bySessions,
      }),
      report({
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
      }),
    ]);

    // GA4 returns dates as YYYYMMDD; summing daily totalUsers counts a
    // returning user once per day they visited.
    const last7Compact = last7Start.replaceAll('-', '');
    const sumDays = (rows) =>
      rows.reduce(
        (sum, row) => ({ sessions: sum.sessions + metric(row, 0), users: sum.users + metric(row, 1) }),
        { sessions: 0, users: 0 }
      );
    const dateRows = byDate.rows || [];

    const sourceRows = (sourceMedium.rows || []).map((row) => ({
      source: dimension(row, 0),
      medium: dimension(row, 1),
      sessions: metric(row, 0),
      users: metric(row, 1),
    }));

    const googleCpcSessions = sourceRows
      .filter((row) => row.source === 'google' && row.medium === 'cpc')
      .reduce((sum, row) => sum + row.sessions, 0);

    return summaryResponse({
      source: 'ga4-service-account',
      generated_at: new Date().toISOString(),
      window: { start, end },
      totals: sumDays(dateRows),
      last_7: sumDays(dateRows.filter((row) => (dimension(row, 0) || '') >= last7Compact)),
      by_source_medium: sourceRows.slice(0, TOP_N),
      by_campaign: (campaigns.rows || []).slice(0, TOP_N).map((row) => ({
        campaign: dimension(row, 0),
        sessions: metric(row, 0),
      })),
      flags: { google_cpc_sessions: googleCpcSessions },
    });
  } catch (error) {
    return errorResponse(error);
  }
}
