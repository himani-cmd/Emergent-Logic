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

const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const QUERY_URL =
  'https://www.googleapis.com/webmasters/v3/sites/sc-domain%3Aemergent-logic.ca/searchAnalytics/query';
const GHL_TERMS = ['gohighlevel', 'ghl', 'go high level'];
const WATCH_QUERY = 'hubspot consultant vancouver';

function round(value, digits) {
  return typeof value === 'number' ? Number(value.toFixed(digits)) : null;
}

function toTotals(row) {
  return {
    clicks: row?.clicks ?? 0,
    impressions: row?.impressions ?? 0,
    ctr: round(row?.ctr ?? 0, 4),
    position: round(row?.position, 2),
  };
}

export async function GET() {
  try {
    const token = await getAccessToken(SCOPE);

    const end = localDate(-2);
    const start = shiftDate(end, -27);
    const previousEnd = shiftDate(start, -1);
    const previousStart = shiftDate(previousEnd, -27);
    const last7Start = shiftDate(end, -6);

    const query = (body) => googleJsonPost(QUERY_URL, token, { startDate: start, endDate: end, ...body });

    const [current, previous, byDate, byQuery, byPage] = await Promise.all([
      query({}),
      query({ startDate: previousStart, endDate: previousEnd }),
      query({ dimensions: ['date'], rowLimit: 28 }),
      query({ dimensions: ['query'], rowLimit: 250 }),
      query({ dimensions: ['page'], rowLimit: 10 }),
    ]);

    const last7 = (byDate.rows || [])
      .filter((row) => row.keys?.[0] >= last7Start)
      .reduce(
        (sum, row) => ({
          clicks: sum.clicks + (row.clicks || 0),
          impressions: sum.impressions + (row.impressions || 0),
        }),
        { clicks: 0, impressions: 0 }
      );

    // Query-level rows feed only these watch numbers and are never returned.
    const queryRows = byQuery.rows || [];
    const ghlImpressions = queryRows
      .filter((row) => {
        const text = String(row.keys?.[0] || '').toLowerCase();
        return GHL_TERMS.some((term) => text.includes(term));
      })
      .reduce((sum, row) => sum + (row.impressions || 0), 0);
    const watchRow = queryRows.find((row) => String(row.keys?.[0] || '').toLowerCase() === WATCH_QUERY);

    const totals = toTotals(current.rows?.[0]);

    return summaryResponse({
      source: 'gsc-service-account',
      generated_at: new Date().toISOString(),
      window: { start, end },
      totals,
      previous_28: toTotals(previous.rows?.[0]),
      last_7: last7,
      watch: {
        ghl_impressions: ghlImpressions,
        hubspot_consultant_vancouver_position: watchRow ? round(watchRow.position, 2) : null,
        ctr: totals.ctr,
      },
      top_pages: (byPage.rows || []).map((row) => ({
        page: row.keys?.[0] ?? null,
        clicks: row.clicks ?? 0,
        impressions: row.impressions ?? 0,
        position: round(row.position, 2),
      })),
    });
  } catch (error) {
    return errorResponse(error);
  }
}
