# Comprehensive Site Update Plan

This is a large update touching the header, homepage, products data, saffron price page, about page, and footer. Breaking it into clear sections:

---

## 1. Header Top Bar -- Social Icons + Links

**File: `src/components/Header.tsx**`

- Add social media icons (Instagram, Telegram, WhatsApp, X/Twitter) on the **right side** of the desktop top bar (absolute right-4), mirroring the flags on the left
- Change Turkish flag link from `/turkish` to `https://rezaei-saffron.ir/Turkish/` (both desktop top bar and mobile menu)
- Change "فروشگاه فارسی" link from `https://rezaei-saffron.ir` to `https://rezaei-saffron.ir/shop` (both desktop nav and mobile menu)
- Add social media icons row inside the mobile hamburger menu (below flags)

---

## 2. Mobile Hero Banner Adjustments

**File: `src/pages/Index.tsx**`

- Reduce mobile banner height: change `min-h-[38vh]` to approximately `min-h-[32vh]` (40-50px less)
- Smaller font on mobile: reduce `text-3xl` to `text-2xl` for headline, smaller subtitle text
- Move "Premium Iranian Saffron" heading higher -- use `justify-start pt-6` on mobile instead of `justify-end`
- Use a more compact/condensed font style (tighter leading, tracking)
- Stick "Buy directly..." text to the bottom of the banner on mobile using absolute positioning or flex layout
- Add ",Iran" after "Khorasan" on the subtitle text globally (both mobile and desktop)

---

## 3. Homepage Product Cards -- "g" instead of "grams"

**File: `src/pages/Index.tsx**`

- In the `RecentProductCard` component, replace "grams" with "g" in the weight display using `.replace(' grams', 'g')` or `.replace('grams', 'g')`
- This change applies only to the homepage recent products slider, not the Products page

---

## 4. New Products from CSV

**File: `src/data/products.ts**`

Add new product sections and products (translated from Persian, prices converted at 140,000 Toman = $1 USD):

### New "Dried Fruits" section (id: "dried-fruits"):


| Product              | Weight | Price (Toman) | Price (USD) |
| -------------------- | ------ | ------------- | ----------- |
| Dried Mulberry       | 150g   | 150,000       | $1.07       |
| Jujube               | 250g   | 120,000       | $0.86       |
| Dried Apricot Slices | 200g   | 150,000       | $1.07       |


### Add to "Negin Saffron" section:


| Product                        | Weight | Price (Toman) | Price (USD) |
| ------------------------------ | ------ | ------------- | ----------- |
| Negin Saffron (1g)             | 1g     | 250,000       | $1.79       |
| Negin Saffron (500g Wholesale) | 500g   | 120,000,000   | $857.14     |


### Add to "Barberry" section:


| Product         | Weight | Price (Toman) | Price (USD) |
| --------------- | ------ | ------------- | ----------- |
| Barberry (500g) | 500g   | 400,000       | $2.86       |


### New "Economy Saffron" section (id: "economy"):


| Product                  | Weight | Price (Toman) | Price (USD) |
| ------------------------ | ------ | ------------- | ----------- |
| Economy Saffron (Narmeh) | 4.6g   | 400,000       | $2.86       |


Each product will have translated English name, description, and the image URLs from the CSV.

---

## 5. Bulk Saffron Purchase Section Updates

**File: `src/pages/Index.tsx**`

- **Negin bulk price**: Change from `~$1,020 / kg` to `$1,300 / kg`
- **Remove** the "(based on 4.6g at $4.69)" text from both cards
- **Root saffron**: Change title from "White Saffron Root (Sefid)" to "White Saffron" and price to `$160 / kg`
- Add "Fresh, product of the current year's harvest" text to both cards
- **Replace images** with newly uploaded ones (copy attached files to `src/assets/`)
- **Add hover/fade image slideshow**: Each bulk card will cycle through 2 images with a CSS fade transition (no arrows or bullets) on hover
- **Remove** the "Request Bulk Quote" button from the contact strip

---

## 6. About Section on Homepage

**File: `src/pages/Index.tsx**`

- Remove the shop image card from the About Banner section
- Remove the Google Maps iframe from the About Banner section
- Keep the text content and "Learn More" button leading to the about us page

**File: `src/pages/About.tsx**`

- Add the Google Maps iframe to the About page (after the storefront section or at the bottom)

---

## 7. Trust Seals Section Updates

**File: `src/pages/Index.tsx**`

- Change title to bigger text: `text-2xl md:text-3xl` (matching other section headings)
- Change background to plain white: `bg-white` instead of `bg-background`
- Replace favicon-based logos with the uploaded image files for: Enamad, Emalls, Torob, Tipax, Post.ir, Zarinpal
- Add USDT logo and Iranicard logo (from uploaded images)

---

## 8. Footer -- Remove Enamad

**File: `src/components/Footer.tsx**`

- Remove the Enamad trust seal block (lines 45-51) from the Brand column

---

## 9. Saffron Price Page Updates

**File: `src/pages/SaffronPrice.tsx**`

- Copy the bulk section from the homepage in this page too.
- Change grid from `grid-cols-3` to `grid-cols-2` on mobile: `grid-cols-2 lg:grid-cols-4`
- Remove the "Visit Our Persian Store" headline from the PersianStoreCTA at the bottom -- replace with a custom CTA: button text "قیمت زعفران مشهد" linking to `https://rezaei-saffron.ir/saffron-today-price/`
  &nbsp;

---

## Files to Create/Copy

- Copy uploaded bulk section images to `src/assets/` (replacing negin-bulk.png and saffron-root-bulk.jpg)
- Copy uploaded trust seal logo images to `src/assets/`
- Copy USDT and Iranicard logo images to `src/assets/`

## Files to Modify

1. `src/components/Header.tsx` -- social icons in top bar, Turkish flag link, Persian store link, mobile menu social icons
2. `src/pages/Index.tsx` -- mobile banner, "g" units, bulk section, about section, trust seals
3. `src/data/products.ts` -- new products from CSV
4. `src/pages/SaffronPrice.tsx` -- 2-col mobile grid, custom CTA button
5. `src/pages/About.tsx` -- add Google Maps
6. `src/components/Footer.tsx` -- remove Enamad  
  
  
