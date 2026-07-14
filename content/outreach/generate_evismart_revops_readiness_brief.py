from __future__ import annotations

from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "EVISMART_PUBLIC_REVOPS_READINESS_BRIEF_2026-07-14.pdf"
LOGO = ROOT / "content" / "brand" / "assets" / "emergent_logic_dark_square_1080.png"

PAGE_W, PAGE_H = landscape(letter)
NAVY = HexColor("#142D4C")
INDIGO = HexColor("#4F46E5")
ACTION = HexColor("#5B5FEF")
INK = HexColor("#172033")
MUTED = HexColor("#536074")
LINE = HexColor("#D8DEEA")
PAPER = HexColor("#F7F9FC")
SOFT = HexColor("#EEF1FF")
TEAL = HexColor("#1B8A7A")


def wrap(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if stringWidth(trial, font, size) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def paragraph(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    *,
    font: str = "Helvetica",
    size: float = 8.3,
    leading: float = 11.2,
    color=INK,
) -> float:
    c.setFillColor(color)
    c.setFont(font, size)
    for line in wrap(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def bullet(c: canvas.Canvas, text: str, x: float, y: float, width: float, *, color=INK) -> float:
    c.setFillColor(ACTION)
    c.circle(x + 3, y + 2.5, 2.4, fill=1, stroke=0)
    return paragraph(c, text, x + 13, y, width - 13, size=8.1, leading=10.7, color=color) - 4


def step(c: canvas.Canvas, number: str, title: str, body: str, x: float, y: float, width: float) -> float:
    c.setFillColor(INDIGO)
    c.circle(x + 12, y + 1, 12, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(x + 12, y - 2, number)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(x + 34, y + 2, title)
    end_y = paragraph(c, body, x + 34, y - 12, width - 34, size=7.8, leading=10.4, color=MUTED)
    return min(y - 50, end_y - 7)


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=landscape(letter))
    c.setTitle("EviSmart Public RevOps Readiness Brief")
    c.setAuthor("Emergent Logic")

    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 94, PAGE_W, 94, fill=1, stroke=0)
    c.drawImage(ImageReader(str(LOGO)), 34, PAGE_H - 83, width=62, height=62, mask="auto")
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 19)
    c.drawString(112, PAGE_H - 42, "EviSmart: Revenue Systems Pre-Hire Stabilization Map")
    c.setFillColor(HexColor("#CCD5FF"))
    c.setFont("Helvetica", 8.4)
    c.drawString(112, PAGE_H - 60, "PUBLIC-SIGNAL REVIEW / PREPARED 2026-07-14 / SURREY, BC")
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 8)
    c.drawRightString(PAGE_W - 34, PAGE_H - 60, "EMERGENT-LOGIC.CA")

    left_x = 34
    left_w = 238
    top = PAGE_H - 118
    c.setFillColor(ACTION)
    c.setFont("Helvetica-Bold", 7.3)
    c.drawString(left_x, top, "PUBLIC SIGNAL")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 13.5)
    c.drawString(left_x, top - 24, "A broad RevOps build mandate")
    y = paragraph(
        c,
        "EviSmart's live Vancouver role asks one owner to build Marketing Ops, Sales Ops, Success Ops, and BizOps; govern HubSpot; reconcile billing and finance; improve forecasting; establish customer-health and renewal visibility; and design integration architecture.",
        left_x,
        top - 45,
        left_w,
        size=8.2,
        leading=11.4,
        color=MUTED,
    )

    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.line(left_x, y - 8, left_x + left_w, y - 8)
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 7.3)
    c.drawString(left_x, y - 31, "INFERENCE TO VALIDATE")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 10.5)
    c.drawString(left_x, y - 51, "Build evidence before redesigning")
    y = paragraph(
        c,
        "The highest-risk period is the handoff between current operators and the incoming RevOps owner. A short evidence-building sprint can give that person a reliable starting point without changing automation prematurely.",
        left_x,
        y - 69,
        left_w,
        size=8.1,
        leading=11.1,
        color=MUTED,
    )

    c.setFillColor(SOFT)
    c.roundRect(left_x, 50, left_w, 80, 6, fill=1, stroke=0)
    c.setFillColor(INDIGO)
    c.setFont("Helvetica-Bold", 7.3)
    c.drawString(left_x + 13, 112, "DECISION QUESTION")
    paragraph(
        c,
        "Which path carries the most near-term revenue risk today: lead-to-opportunity, quote-to-cash, or renewal?",
        left_x + 13,
        91,
        left_w - 26,
        font="Helvetica-Bold",
        size=9.2,
        leading=12.2,
        color=INK,
    )

    divider_x = 294
    c.setStrokeColor(LINE)
    c.line(divider_x, 44, divider_x, PAGE_H - 112)

    main_x = 320
    main_w = PAGE_W - main_x - 34
    c.setFillColor(ACTION)
    c.setFont("Helvetica-Bold", 7.3)
    c.drawString(main_x, top, "FIRST TEN WORKING DAYS")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 13.5)
    c.drawString(main_x, top - 24, "Create a controlled handoff, one path at a time")

    col_gap = 24
    col_w = (main_w - col_gap) / 2
    y1 = top - 54
    y1 = step(
        c,
        "01",
        "Control plane",
        "List the systems and owners for lead, opportunity, contract, billing, customer health, and revenue. Decide which system is authoritative for each critical field.",
        main_x,
        y1,
        col_w,
    )
    y1 = step(
        c,
        "02",
        "Revenue path",
        "Walk a small sample from inquiry to closed-won and from customer to renewal. Record stage criteria, ownership changes, SLA expectations, and exceptions.",
        main_x,
        y1,
        col_w,
    )

    right_x = main_x + col_w + col_gap
    y2 = top - 54
    y2 = step(
        c,
        "03",
        "Workflow reliability",
        "Inventory the highest-impact workflows, integrations, dependencies, and failure alerts. Test one path with acceptance criteria before changing automation.",
        right_x,
        y2,
        col_w,
    )
    y2 = step(
        c,
        "04",
        "Leadership visibility",
        "Reconcile a baseline set of pipeline and recurring-revenue metrics. Document definitions, refresh timing, and accountability for each metric.",
        right_x,
        y2,
        col_w,
    )

    box_y = 78
    box_h = 156
    c.setFillColor(white)
    c.setStrokeColor(LINE)
    c.roundRect(main_x, box_y, main_w, box_h, 6, fill=1, stroke=1)
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 7.3)
    c.drawString(main_x + 16, box_y + box_h - 23, "LOW-RISK STARTING POINT")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(main_x + 16, box_y + box_h - 43, "A fixed-scope diagnostic should leave five usable outputs")

    left_items = [
        "Source-of-truth and field-ownership matrix.",
        "Map of one lead-to-revenue or renewal path.",
        "Prioritized workflow and data-risk backlog.",
    ]
    right_items = [
        "Acceptance checks for the first implementation sprint.",
        "Concise handoff pack for the permanent RevOps owner.",
    ]
    item_y = box_y + box_h - 68
    for item in left_items:
        item_y = bullet(c, item, main_x + 18, item_y, col_w - 6)
    item_y = box_y + box_h - 68
    for item in right_items:
        item_y = bullet(c, item, right_x, item_y, col_w - 10)

    c.setStrokeColor(LINE)
    c.line(34, 32, PAGE_W - 34, 32)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.7)
    c.drawString(34, 19, "Prepared by Emergent Logic using public information only. No internal access was used; this is not a claim about EviSmart's current system.")
    c.drawRightString(PAGE_W - 34, 19, "AI-accelerated solutions. Human-centered results.")
    c.linkURL("https://www.emergent-logic.ca", (PAGE_W - 170, 8, PAGE_W - 30, 30), relative=0)

    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
