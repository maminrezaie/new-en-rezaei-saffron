

# Import WooCommerce Products into Products Page

## Overview
Replace the current hardcoded products with all 10 products from the WooCommerce CSV export, fully translated to English, prices converted to USD, and displayed in a 3-column mobile / 4-column desktop grid.

## Products (Translated & Converted)

| # | Name | Weight | Price (USD) | Category |
|---|------|--------|-------------|----------|
| 1 | Puffed Barberry | 1 kg | $5.36 | Barberry |
| 2 | White Saffron Root | 4.6g | Contact for Price | Saffron Root |
| 3 | Negin Saffron | 4.6g | $9.29 | Negin Saffron |
| 4 | Gift Saffron — Wooden Box | 4.6g | $8.93 | Gift Saffron |
| 5 | Saffron Root | 2.3g | $1.07 | Saffron Root |
| 6 | Bunch Saffron (Dokhtarpich) | 4.6g | $6.07 | Bunch Saffron |
| 7 | Gift Saffron — Round Tin | 4.6g | $7.14 | Gift Saffron |
| 8 | Premium Cardamom | 20g | $0.57 | Spices |
| 9 | Gift Saffron — Velvet Box | 4.6g | $8.57 | Gift Saffron |
| 10 | Khatam Gift Saffron | 4.608g | $8.57 | Gift Saffron |

Price conversion: Toman / 140,000 = USD

## Changes

### 1. New file: `src/data/products.ts`
A typed data file containing all 10 products organized into category sections:
- **Negin Saffron** (1 product)
- **Bunch Saffron** (1 product)
- **Saffron Root** (2 products)
- **Gift Saffron** (4 products)
- **Barberry** (1 product)
- **Spices** (1 product — Cardamom)

Each product object includes:
- `name` — English translated name
- `shortDescription` — English translated short description (harvest info, key features)
- `description` — English translated full description (health benefits, usage, quality details)
- `weight` — e.g. "4.6g", "1 kg"
- `price` — formatted USD string (e.g. "$9.29") or `null` for "Contact for Price"
- `images` — array of WooCommerce image URLs (used directly as external img sources)

### 2. Updated file: `src/pages/Products.tsx`
- Import product data from `src/data/products.ts`
- Render products grouped by category with section headers
- **Grid layout**: `grid-cols-3` on mobile, `grid-cols-4` on desktop (`lg:grid-cols-4`)
- Product cards show:
  - Primary image with hover to reveal second image (matching homepage pattern)
  - English product name
  - Short description (truncated to 2 lines)
  - Weight
  - Price in USD or "Contact for Price"
  - "Inquire Now" button linking to `/contact`
- Remove old static imports (bunch-saffron-pack, bunch-saffron-bulk, etc.) since images now come from external URLs

### 3. Description translations (summarized examples)
- Negin Saffron: "Premium Negin saffron from Gonabad, harvested November 2024. Thick, fully red stigmas with no yellow parts. Rich in antioxidants, supports immune health and mood. Exceptional coloring power and aroma."
- Bunch Saffron: "Complete saffron threads (stigma + style) in their natural harvested form. Stronger aroma and longer shelf life than cut varieties. Traditionally dried, no additives."
- Gift Saffron Wooden Box: "Premium Negin saffron in a handcrafted Khatam wooden box. Export-quality with bold, fully red threads. Ideal as a luxury gift."
- And similar for all other products.

## Technical Details
- External images from `rezaei-saffron.ir` will be used directly as `<img src>` values
- No new dependencies needed
- Existing card hover pattern (dual images with opacity transition) reused from homepage `ProductCard`
- All text rendered in English only — no Persian characters anywhere
- Short descriptions cleaned of HTML artifacts from the CSV

