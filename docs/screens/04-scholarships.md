# 04 — Scholarships

| | |
|---|---|
| **Route** | `/scholarships` |
| **Surface** | Institution website |
| **Status** | Draft |
| **Updated** | 2026-06-29 |

---

## 1. Purpose

Help prospective students and parents discover **institution-specific scholarships and financial aid**, understand eligibility and benefits, and enquire with admissions.

Display-only — no online application, fee calculation, or payment on this screen.

---

## 2. Users

| User | Why they come here |
|------|-------------------|
| **Prospective student** (Odia-first) | Check if they qualify for aid before applying |
| **Parent / guardian** | Confirm affordability and application steps |
| **Priya** (WF-11) | Cost-conscious student — arrives from Home highlight, nav, or Course detail |

---

## 3. Sections

Top to bottom:

1. **Page intro**
2. **Scholarship list** (expandable cards)
3. **Enquiry CTA**
4. **FAQ** — candidate from research; not in wireframe v1 yet

Shared chrome (header, footer, language switcher, Enquire Now) is inherited from the institution template — not listed again.

---

## 4. Content Definition

### Page intro

| Slot | Notes |
|------|-------|
| Heading | e.g. *Scholarships & Financial Aid* |
| Description | 1–2 sentences — institution-level message on affordability (localized Odia + English) |

### Scholarship card (listing)

| Slot | Notes |
|------|-------|
| Name | Required |
| Summary | Short teaser on collapsed card |

### Scholarship card (expanded detail)

| Slot | Notes |
|------|-------|
| Eligibility | Full criteria |
| Benefit | Display text only — not calculated fees |
| How to apply | Steps or instructions |
| Applicable course | Optional link to Course detail |
| Deadline | Optional badge or date line |

### Enquiry CTA

| Slot | Notes |
|------|-------|
| Heading | e.g. *Need help with scholarships?* |
| Description | 1 line — admissions team will guide |
| CTA label | e.g. *Enquire About Scholarships* |

### FAQ

| Slot | Notes |
|------|-------|
| Question / answer pairs | ~5 topics — **TBD in content research** (e.g. multiple schemes, deadlines, NSP help, renewal) |

### Empty state

| Slot | Notes |
|------|-------|
| Message | e.g. *Scholarship details will be published soon.* |

---

## 5. UX Notes

- Listing and detail live on **one page** (`/scholarships`) — expand card in place; no separate detail URL.
- **Multi-expand** allowed — user can open more than one card.
- Enquiry opens a **modal** (not an inline form on this page).
- When **zero scholarships** are published: show empty state; keep nav link; hide Home scholarships highlight (BR-IW-011).
- When scholarships exist: show enquiry CTA; hide it in empty state.
- Sticky **Enquire Now** on mobile matches other institution pages.
- Scholarships are informational only — CTA always leads to enquiry, never to payment or application upload.

---

## 6. References

| Source | Link |
|--------|------|
| BRD — scholarships page | [BR-IW-010, BR-IW-011, BR-BR-009](../../ssrkeducation-docs/brd/ssrkeducation-brd-v1.md) |
| MVP scope | [Scholarships section](../../ssrkeducation-docs/brd/mvp-scope-v1.md) |
| IA — page + sections | [§5.6, §6.6](../../ssrkeducation-docs/research/institution-website-information-architecture/institution-website-ia-research.md) |
| Enquiry modal + topics | [Enquiry research](../../ssrkeducation-docs/research/6-enquiry-management-design/6-enquiry-management-design-research.md) |
| Key flow | [WF-11](../user-flows/user-workflows-v1.md#wf-11-scholarship-discovery-to-enquiry) |
| Legacy high-fi reference | [Scholarships.html](../../education-website/institution/Scholarships.html) — includes FAQ + apply steps not yet adopted |

---

## 7. Wireframe

[`low-fi/institution/04-scholarships.html`](../../low-fi/institution/04-scholarships.html)

- 2-column card grid (desktop), 1 column (mobile)
- One card expanded by default
- Empty-state preview toggle
- Enquiry modal with Scholarships topic pre-checked (wireframe suggestion)

```bash
open ssrkeducation-design-ref/low-fi/institution/04-scholarships.html
```

---

## 8. Review Notes

### Open questions

| # | Question |
|---|----------|
| 1 | Pre-select **Scholarships** enquiry topic when modal opens from this page? |
| 2 | Include **FAQ** section in MVP? Legacy HTML has one; IA §6.6 does not — decide in content research. |
| 3 | Include institution-wide **How to apply** steps (separate from per-scholarship field)? Legacy HTML has one. |

### Improvements (later)

- Add FAQ to wireframe once content research confirms topics.
- Align wireframe with final copy after Odisha scheme research.

### Version history

| Date | Change |
|------|--------|
| 2026-06-29 | Initial spec + wireframe |
| 2026-06-29 | Simplified to lightweight template (purpose → review notes) |
