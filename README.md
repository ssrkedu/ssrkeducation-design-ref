# SSRK Edu — Design Reference

Static HTML prototypes and design documentation. Open HTML files in a browser to preview.

## Structure

```text
docs/
  screens/          ← One .md per screen (spec through UX review)
  user-flows/       ← Application-level journeys
  design-system/    ← Tokens, components, color exploration
low-fi/             ← Grey wireframes (no brand colors)
high-fi/            ← Branded HTML reference (Phase 8)
assets/             ← Shared images, icons
```

## Legacy (migrate during Phase 8)

| Legacy path | Target |
|-------------|--------|
| `education-website/institution/` | `high-fi/institution/` |
| `education-website/trust/` | `high-fi/public/` |
| `admin-portal/` | `high-fi/admin/` |

Until migration completes, legacy paths remain deployable on Netlify.

## Applications

| App | Legacy entry | Domain |
|-----|--------------|--------|
| Parent / trust | `education-website/trust/index.html` | `ssrkedu.com` |
| Institution | `education-website/institution/index.html` | `{slug}.ssrkedu.com` |
| Admin | `admin-portal/index.html` | `admin.ssrkedu.com` |

## Workflow

See [`ssrkeducation-docs/project-context.md`](../ssrkeducation-docs/project-context.md) for the full design → development process.

## Netlify

Publish repository root. `netlify.toml` publishes `.`
