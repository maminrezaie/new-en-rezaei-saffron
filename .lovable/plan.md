

# Add Two New Sections to the Homepage

## Overview
Add a "Recent Products" auto-sliding section and a "Why Choose Us" trust section to the homepage.

---

## Section 1: Recent Products Slider

**Placement**: Between the Categories slider and the Featured Products section.

**Behavior**:
- Shows all 10 products from `src/data/products.ts` in a horizontal slider
- Auto-slides every 5 seconds
- 5 visible columns on desktop, 3 on mobile
- Edge-hugging navigation arrows (left/right)
- Uses the same card style as the Products page (center-aligned text, weight in bold red, price enlarged, weight | price on one line, hover image swap, "Inquire Now" button)

**Implementation**:
- Import `productSections` from `src/data/products.ts` and flatten into a single array
- Build a horizontal scrollable container with `snap-x` behavior
- Each card uses `flex-shrink-0` with width `w-1/3` (mobile) / `w-1/5` (desktop)
- Nav arrows positioned at the outer edges of the container (flush with the section boundary)
- Auto-scroll interval at 5s, resets on manual arrow click

---

## Section 2: Why Choose Us

**Placement**: Between the Recent Products slider and the About Banner section.

**Design**: A clean grid of 4 trust points with icons, styled to match the luxury aesthetic.

Trust points:
1. **Farm-Direct Supply** -- "Sourced directly from Gonabad farms, no middlemen"
2. **Export-Grade Quality** -- "Premium Negin saffron with verified purity and grading"
3. **Global Shipping** -- "Reliable delivery to customers worldwide"
4. **Money-Back Guarantee** -- "Full refund if you're not satisfied with the quality"

Layout: 2x2 grid on mobile, 4 columns on desktop. Each card has a Lucide icon, title, and short description, center-aligned.

---

## Technical Details

### File changed: `src/pages/Index.tsx`
- Import `productSections` from `@/data/products.ts`
- Flatten products into `allProducts` array
- Add the Recent Products slider section with:
  - A scroll container with `useRef` and `useEffect` for 5s auto-scroll
  - Manual arrow buttons at container edges
  - Product cards matching the Products page `ProductCard` component style
- Add the Why Choose Us section with:
  - Lucide icons (`Sprout`, `Award`, `Globe`, `ShieldCheck`)
  - 4-column responsive grid
- No new files or dependencies needed

### Updated homepage section order:
1. Hero Banner
2. Categories Slider
3. **Recent Products Slider (new)**
4. Featured Products
5. **Why Choose Us (new)**
6. About Banner (Rezaei Saffron -- Since 2012)

