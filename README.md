# SSRK Edu — Design Reference

Static HTML prototypes and design tokens for the SSRK Edu platform. Open files directly in a browser to preview layouts and navigation.

## Applications

| Application | Folder | Entry point | Production domain |
|-------------|--------|-------------|-------------------|
| **Parent / trust website** | `education-website/trust/` | [`index.html`](education-website/trust/index.html) | `ssrkedu.com` |
| **Institution website** | `education-website/institution/` | [`index.html`](education-website/institution/index.html) | `{institution}.ssrkedu.com` |
| **Admin portal** | `admin-portal/` | [`index.html`](admin-portal/index.html) | Admin subdomain (TBD) |

Shared design tokens and color exploration live in [`design-system/`](design-system/).

## Navigation flow

```
education-website/trust/index.html          (parent landing — ssrkedu.com)
        │
        │  Select any institution (nav, cards, footer)
        ▼
education-website/institution/index.html    (institution home — hub for all institution pages)
        │
        ├── About.html
        ├── Courses.html ──► Course-Detail.html
        ├── Scholarships.html
        ├── Faculty.html
        ├── Gallery.html
        └── Contact.html
        │
        │  Footer / trust link
        ▼
education-website/trust/index.html
```

The **admin portal** is a separate app with its own styles (`admin-portal.css`) and is not linked from the public sites.

## Folder structure

```
ssrkeducation-design-ref/
├── README.md
├── admin-portal/
│   ├── index.html              # Login, dashboard, enquiries, CMS, users
│   └── admin-portal.css
├── design-system/
│   ├── SSRK Design System.md   # Colors, typography, components
│   └── SSRK - Color Options.html
├── education-website/
│   ├── _shared/                # Ticker + top contact bar (all public pages)
│   │   ├── site-chrome.css
│   │   └── site-chrome.js
│   ├── trust/
│   │   └── index.html          # Parent website (was SSRK Educational Trust - Home.html)
│   └── institution/
│       ├── _components/        # Shared header (CSS + JS)
│       │   ├── institution-header.css
│       │   └── institution-header.js
│       ├── index.html          # Institution home (was Institution Home.html)
│       ├── About.html
│       ├── Contact.html
│       ├── Course-Detail.html
│       ├── Courses.html
│       ├── Faculty.html
│       ├── Gallery.html
│       └── Scholarships.html
└── screenshots/                # Reference captures
```

## Quick start

1. **Parent website:** open `education-website/trust/index.html`
2. **Institution site:** open `education-website/institution/index.html`, or click any institution from the trust site
3. **Admin portal:** open `admin-portal/index.html`

## MVP alignment

Per [MVP Scope v1](../ssrkeducation-docs/ssrkedu-mvpScope-v1.md):

- **Trust site** — single landing page with anchor sections; routes visitors to institution subdomains
- **Institution site** — seven-page template (Home, About, Courses, Course Detail, Scholarships, Faculty, Gallery, Contact)
- **Admin portal** — enquiries, content management, users (auth required)

The institution prototype currently uses **SSRK Degree College** as the sample tenant; all institution links on the trust page point to the same institution template.

### Shared institution header

All institution pages mount the same header via `_components/institution-header.js`. Configure per page on the mount element:

```html
<div id="inst-header-mount"
     data-active="courses"
     data-enquire-href="Contact.html"></div>
<script src="_components/institution-header.js"></script>
```

| Attribute | Purpose |
|-----------|---------|
| `data-active` | Highlights nav item: `home`, `courses`, `scholarships`, `faculty`, `gallery`, `contact` |
| `data-enquire-href` | Enquire CTA target (default `Contact.html`) |
| `data-enquire-button` | Set `true` for button + `openModal()` (Course Detail) |
| `data-show-lang` | Show EN/ଓଡ଼ିଆ toggle (home page only) |
| `data-show-trust` | Show “Part of SSRK Edu” under logo (home page only) |
| `data-i18n` | Add `data-t` attributes for home page translations |
