

# About Page Updates

## Changes

### 1. Add shop image
Save the uploaded storefront photo to `src/assets/shop-image.jpg` and display it in the Hero section alongside the existing intro text (two-column layout on desktop, stacked on mobile).

### 2. Change "Owner" to "Manager"
Update the section heading from "About the Owner" to "About the Manager".

### 3. Add CV link
Add a link to https://maminrezaie.github.io/ in the Manager section, styled as an inline text link (e.g., "View his CV").

### 4. Add Persian Shop CTA at the bottom
Add a new section at the very bottom of the page with a call-to-action linking to the Persian store (https://rezaei-saffron.ir), mentioning "up to date prices". Styled as an accent banner similar to the existing "Our Commitment" section.

## Technical Details

### File: `src/pages/About.tsx`
- Import the shop image from `@/assets/shop-image.jpg`
- Restructure Hero section into a two-column layout: text left, shop image right
- Line 39: Change "About the Owner" to "About the Manager"
- Line 36 comment: Update to match
- Add CV link after the manager description paragraph
- Add new CTA section after "Our Commitment" with a button linking to `https://rezaei-saffron.ir`

### New asset
- Copy `user-uploads://image-2.png` to `src/assets/shop-image.jpg`

