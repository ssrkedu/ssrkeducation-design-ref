# SSRK Educational Trust — Design System

## Color Palette

### Primary Blues (Main Brand)
- **Deep Blue** `#3B6E9A` — Headers, footers, dark accents
- **Primary Blue** `#5088B8` — Buttons, CTAs, hero backgrounds, stat bars
- **Mid Blue** `#6BA0CC` — Hover states, secondary accents
- **Light Blue** `#EAF4FB` — Backgrounds, card hover states

### Accent Colors
- **Saffron** `#D4780A` — Primary CTA buttons, highlights, badge backgrounds
- **Saffron Light** `#F0A030` — Hover states on saffron, decorative elements

### Neutrals
- **White** `#FFFFFF` — Text on blue, card backgrounds
- **Background Gray** `#F5F7FA` — Section backgrounds, subtle fills
- **Text (Dark)** `#0D2340` — Headlines
- **Text (Body)** `#2C3E50` — Body copy, main text
- **Text (Muted)** `#6B7A8D` — Secondary text, labels, captions
- **Border** `#D4E0EF` — Dividers, card borders

### Semantic Colors
- **Red** `#B71C1C` — Ticker bar, urgent alerts
- **Green** `#1B8A5E` — Success states, confirmations
- **Orange** `#C86400` — Warning/Info badges
- **Purple** `#6A1B9A` — Secondary category badges

---

## Typography

### Font Families
- **Sans-serif (Primary):** `Noto Sans` — Body text, UI, navigation
- **Serif (Accent):** `Noto Serif` — Headlines, quotes, premium text

### Sizing Scale (with `clamp()` for responsiveness)
- **H1 (Hero Title):** `clamp(24px, 5.5vw, 54px)` — Large, impactful
- **H2 (Section Title):** `clamp(22px, 4vw, 32px)` — Section headers
- **H3 (Card Title):** `16px` — Institution/card names
- **H4 (Footer):** `12px` — Section headers in footer
- **Body Large:** `15px` — Main paragraph text
- **Body:** `14px` — Default text
- **Body Small:** `12.5px` — Secondary text
- **Label:** `11px` — Form labels, tags, badges (uppercase, `letter-spacing: 1px`)
- **Tiny:** `10.5px` — Ticker labels, footnotes

### Font Weights
- **700** — Headlines, labels, CTAs
- **600** — Subheadings, section labels
- **500** — Secondary text, form labels
- **400** — Body copy
- **300** — Light accents (rare)

---

## Spacing System

All spacing uses multiples of 4px for consistency:
- **xs:** 4px
- **sm:** 8px
- **md:** 12px
- **lg:** 16px
- **xl:** 20px
- **2xl:** 24px
- **3xl:** 28px
- **4xl:** 32px
- **5xl:** 40px
- **6xl:** 44px
- **7xl:** 56px
- **8xl:** 64px
- **9xl:** 88px

### Section Padding
- **Mobile:** `64px 0` (padding top/bottom)
- **Tablet+:** `88px 0`

### Container Padding
- **Mobile:** `16px`
- **Tablet:** `24px`
- **Desktop:** `32px`

---

## Border Radius

- **sm** `6px` — Small buttons, form inputs, small cards
- **md** `10px` — Medium cards, modals
- **lg** `16px` — Large cards, feature sections

---

## Shadows

- **sm:** `0 2px 8px rgba(0,0,0,.08)` — Subtle elevation
- **md:** `0 4px 20px rgba(0,0,0,.12)` — Standard card shadow
- **lg:** `0 8px 40px rgba(0,0,0,.16)` — Deep elevation, modals

---

## Transitions & Animation

- **Standard Duration:** `.28s ease`
- **Hover Duration:** `.2s` (for fast feedback)
- **Scroll Animation Duration:** `.55s ease` (fade-in on scroll)
- **Slide Animation:** `.65s cubic-bezier(.4,0,.2,1)` (smooth easing)

### Animation Triggers
- Buttons: Slight lift on hover (`transform: translateY(-1px)`)
- Cards: Lift + shadow enhancement on hover
- Icons: Subtle translate on hover (arrow icons: `translateX(3px)`)
- Text Links: Color change on hover

---

## Component Patterns

### Buttons

#### Primary Button (CTA)
- Background: `var(--saffron)` #D4780A
- Text: White, `14px`, `font-weight: 700`
- Padding: `12px 26px`
- Hover: Darker saffron `#b5660a` + lift

#### Outline Button
- Background: Transparent
- Border: `2px solid rgba(255,255,255,.65)`
- Text: White, `14px`, `font-weight: 600`
- Padding: `10px 22px`
- Hover: `rgba(255,255,255,.15)` bg + solid white border

#### Blue Button (Secondary)
- Background: `var(--blue-primary)` #5088B8
- Text: White, `13px`, `font-weight: 600`
- Padding: `10px 22px`
- Hover: Darker blue `var(--blue-deep)` #3B6E9A

### Cards

#### Institutional Card
- Background: White
- Border: `1.5px solid var(--border)` #D4E0EF
- Padding: `24px`
- Border Radius: `var(--r-md)` 10px
- Shadow: `var(--sh-sm)`
- Hover: Lift + enhanced shadow + border color change to blue

#### "Why Choose Us" Card
- Background: `var(--bg)` #F5F7FA
- Padding: `28px 18px`
- Border: `1.5px solid transparent`
- Border Radius: `var(--r-md)`
- Hover: Light blue background + blue border

### Form Elements

#### Input / Select
- Background: `var(--bg)` #F5F7FA
- Border: `1.5px solid var(--border)` #D4E0EF
- Border Radius: `var(--r-sm)` 6px
- Padding: `11px 13px`
- Font: `14px`, var(--ff)
- Focus: Border color → blue, background → white

#### Labels
- Font: `11px`, `font-weight: 700`
- Color: `var(--text-m)` #6B7A8D
- Text Transform: `uppercase`
- Letter Spacing: `.5px`

### Badges & Tags

#### Tag (News category)
- Font: `10px`, `font-weight: 700`
- Padding: `2px 8px`
- Border Radius: `10px` (pill shape)
- Letter Spacing: `.5px`
- Text Transform: `uppercase`

**Variants:**
- **Admission** — Light blue bg `#E3F2FD` + blue text `var(--blue-primary)`
- **Event** — Light orange bg `#FFF3E0` + orange text `#C86400`
- **Scholarship** — Light green bg `#E8F5E9` + green text `#2E7D32`
- **Result** — Light purple bg `#F3E5F5` + purple text `#6A1B9A`

---

## Layout Patterns

### Hero Section
- **Height Mobile:** `58vh` (min `360px`)
- **Height Tablet:** `72vh` (min `480px`)
- **Height Desktop:** `86vh` (min `540px`, max `800px`)
- **Gradient Overlay:** 125° angle, 2-3 color gradient with opacity blends
- **Decorative Circles:** Large semi-transparent circles, `border-width: 72px`, positioned absolutely
- **Content Max Width:** `700px`

### Grid Systems

#### 2-Column (Hero)
Used on About section with text + card:
```css
grid-template-columns: 1fr 400px;  /* desktop */
gap: 64px;
```

#### 2-Column (Why Us, Stats mobile)
```css
grid-template-columns: 1fr 1fr;
gap: 16px;  /* mobile */
```

#### 3-Column (Why Us desktop, Institutions mobile)
```css
grid-template-columns: repeat(3, 1fr);
gap: 20px;  /* desktop */
```

#### 4-Column (Stats desktop, Footer)
```css
grid-template-columns: repeat(4, 1fr);
gap: 0;  /* stats bar: divided evenly */
```

### Responsive Breakpoints
- **Mobile:** default (< 540px)
- **Small Tablet:** `540px` — grid changes to 2 cols
- **Tablet:** `768px` — nav adjusts, layouts shift
- **Large Tablet:** `1024px` — desktop nav appears, hero arrows visible
- **Desktop:** `1240px` — max container width

---

## Special Components

### Ticker Bar
- **Background:** Red `#B71C1C`
- **Height:** `36px`
- **Label Background:** Saffron `var(--saffron)`
- **Animation:** Horizontal scroll `42s linear infinite`
- **Item Separator:** Diamond `◆` in saffron light

### Stat Bar
- **Background:** Primary blue `var(--blue-primary)` #5088B8
- **Text Color:** White
- **Number Font:** Serif, `44px` (scales with `clamp`)
- **Label Font:** `10.5px`, uppercase, letter-spaced
- **Number Color:** White; accent `+` and `K` → saffron light

### Hero Dots (Slide indicators)
- **Active:** Saffron light, `24px` wide
- **Inactive:** `rgba(255,255,255,.38)`, `8px` wide
- **Transition:** Smooth width change

### Chairman Card
- **Background:** Linear gradient `150deg` from deep blue to primary blue
- **Border Radius:** `var(--r-lg)` 16px
- **Padding:** `32px 28px`
- **Quote Mark:** Decorative `"` at `130px` font-size, `rgba(255,255,255,.07)`
- **Avatar:** `72px` circle, border `4px solid rgba(255,255,255,.25)`
- **Accreditation Row:** `rgba(255,255,255,.1)` bg, `1px solid rgba(255,255,255,.18)` border

### Dropdown Navigation
- **Background:** White, with top border `3px solid var(--blue-primary)`
- **Box Shadow:** `var(--sh-lg)`
- **Min Width:** `230px`
- **Animation:** Appear on hover (opacity + transform)
- **Items:** `9px 13px` padding, `13px` font, blue on hover

### Mobile Menu
- **Position:** Fixed full-screen
- **Transform:** Slide in from right `translateX(100%)`
- **Animation:** `.35s cubic-bezier(.4,0,.2,1)`
- **Padding Top:** `80px` (below sticky header)

---

## Accessibility

### ARIA Labels
- Buttons: `aria-label` for icon buttons
- Navigation: `role="navigation"`, `aria-label`
- Sections: `id` on headings, `aria-labelledby` on sections
- Tabs: `role="tablist"`, `aria-selected`, `aria-label`
- Modal/Dialog: `role="dialog"`, `aria-hidden`, `aria-label`

### Focus States
- All interactive elements have visible focus outlines (via `:focus`)
- Form inputs: Border color changes to blue on focus, background → white
- Keyboard navigation: Fully supported

### Color Contrast
- Text on blue: WCAG AAA compliant (white text on dark blue)
- Text on white: WCAG AAA compliant (dark text on white)
- Links: Saffron accents with sufficient contrast

---

## Responsive Design Philosophy

- **Mobile-first approach:** Base styles for mobile, enhanced with breakpoints
- **Flexible typography:** `clamp()` scales headings fluidly between breakpoints
- **Flex/Grid with gap:** All layouts use modern CSS grid/flex with `gap`, no margin hacks
- **Touch targets:** Minimum `44px` hit area for buttons/links on mobile
- **Full-width sections:** Sections stretch edge-to-edge, container limits content width

---

## Brand Voice & Tone

- **Trustworthy:** Professional colors (blues), heritage (35+ years language)
- **Aspirational:** Saffron accents, uplift language ("Shaping Leaders")
- **Accessible:** Clear language, large readable text, generous spacing
- **Inclusive:** Multiple entry points (6 colleges), scholarships highlighted, outstation students considered

---

## File Structure

See the repository [README](../README.md) for the current folder layout. Trust and institution prototypes live under `education-website/`.

```
education-website/trust/index.html
├── <style> (all CSS in one <style> block)
│   ├── CSS Variables (--blue-*, --saffron-*, etc.)
│   ├── Global Resets & Base Styles
│   ├── Container & Responsive Grid
│   ├── Button Styles (.btn-primary, .btn-outline, .btn-blue)
│   ├── Typography (.section-label, .section-title, etc.)
│   ├── Component Styles (hero, stats, cards, forms, etc.)
│   ├── Layout Patterns (grid systems, spacing)
│   ├── Responsive Breakpoints
│   ├── Animation Keyframes (@keyframes tick, fade-up)
│   └── Utility Classes (.fade-up, .visible, etc.)
├── <body>
│   ├── Ticker Bar
│   ├── Top Bar (contact info, CTA)
│   ├── Header (logo, nav, hamburger)
│   ├── Mobile Menu
│   ├── Hero Section (carousel with 3 slides)
│   ├── Stats Bar (4 stats with icons)
│   ├── About Section (text + Chairman card)
│   ├── Institutions Section (6 cards, 3-col grid)
│   ├── Why Us Section (7 feature cards)
│   ├── News & Events Section (news list + photo gallery)
│   ├── Admission Enquiry Section (form + info points)
│   ├── Footer (4-col grid, contact, links)
│   ├── Scroll-to-Top Button
│   └── <script> (hero slider, menu toggle, animations)
```

---

## Usage Notes

### Colors
Use CSS variables (`var(--blue-primary)`, `var(--saffron)`, etc.) throughout. Never hardcode hex values except in gradients or special cases.

### Typography
All headings use `font-family: var(--fs)` (serif). Body text uses `font-family: var(--ff)` (sans-serif). Use `clamp()` for responsive sizing on large text.

### Spacing
Use multiples of 4px. Sections use `64px 0` (mobile) / `88px 0` (tablet+). Cards/components use `gap` property, not margins.

### Transitions
All interactive elements use `transition: var(--tr)` (`.28s ease`). Hover states include subtle lift (`translateY(-1px)`) or background change.

### Responsive Images
All `<img>` tags: `max-width: 100%; display: block`. Container handles aspect ratio / sizing.

### Gradients
Hero slide gradients use `125deg` angle and 2-3 color stops with opacity blends for depth.

### Animations
- Fade-in on scroll: `.fade-up` class, triggered by `IntersectionObserver`
- Hero slide: `.65s cubic-bezier(.4,0,.2,1)` easing
- Ticker: `42s linear infinite` loop
- Dropdown: `.22s ease` opacity + transform

---

## Future Extensions

- **Dark mode:** Create `:root[data-theme="dark"]` variant with inverted colors
- **Theming:** Make primary blue / saffron swappable via CSS variables
- **Internationalisation:** Add Odia language support (flip layout for RTL)
- **Performance:** Lazy-load images in gallery, defer off-screen scripts
- **A/B Testing:** Use data attributes for variant tracking
