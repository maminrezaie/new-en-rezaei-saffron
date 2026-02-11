

# Comprehensive Site Update Plan

## 1. Header Changes

### Top Bar (New Component)
- Add a dark red band (`bg-primary`) above the main header
- Move the Iraqi/Kurdish SVG flag icons to the right corner of this bar visible only on desktop view
- also add turkish flag leading to /turkish
- left-align text: "Endorsed by UN Food & Agriculture Org -- FAO"
- Small text size (text-xs), cream/light text color

### Main Header
- Increase height from `h-16 md:h-20` to `h-20 md:h-24`
- Remove the Iraqi/Kurdish flags from the desktop nav (moved to top bar)
- Keep the Persian store pill link in desktop nav

### Mobile Header
- Replace the WhatsApp phone icon (left side) with a direct call link to `tel:+989150616788`
- Keep mobile menu language switch and Persian store link as-is

## 2. Hero Banner Changes

- Remove the "Endorsed by UN Food & Agriculture Org" text link (moved to top bar)
- Lighten the overlay globally: change `from-dark/60 via-dark/20` to `from-dark/40 via-dark/5`
- On mobile: adjust layout so the "Buy directly..." text sits at the bottom of the banner
- On mobile: use `object-position` or adjusted positioning so the saffron bowl (right side) is partially visible

## 3. WhatsApp Floating Button
- Increase icon size from `w-14 h-14` to `w-16 h-16` and inner SVG from `w-7 h-7` to `w-8 h-8`

## 4. Product Cards -- 2 Columns on Mobile/Tablet

### Recent Products Slider (Homepage)
- Change card width from `w-[calc(33.333%-8px)]` to `w-[calc(50%-6px)]` on mobile
- Keep desktop at `md:w-[calc(20%-10px)]`

### Products Page Grid
- Change from `grid-cols-3` to `grid-cols-2` for mobile/tablet
- Keep `lg:grid-cols-4` for desktop

### Featured Products (Homepage)
- Already 2 columns on mobile -- no change needed

## 5. Dried Fruits Category Image
- Replace `dried-fruits-category.jpg` with this one https://upload.wikimedia.org/wikipedia/commons/b/b2/DriedfruitS.jpg
(also attached)

## 6. Bulk Saffron Purchase Section (New -- Homepage)

### Negin Saffron Bulk
- Copy uploaded image `negin-category-2.png` to `src/assets/`
- Feature card with image, excerpt about Iranian Negin saffron characteristics (thick red stigmas, high crocin, Grade I)
- Calculated bulk price: 4.6g = $9.29, so 1 kg ~ **$1,020/kg**

### Root Saffron Bulk
- Copy uploaded image `Sefid222.jpg` to `src/assets/`
- Feature card with image, excerpt on health benefits (immune support, antioxidants, calming tea)
- Calculated bulk price: 4.6g = $2.00, so 1 kg ~ **$435/kg**

### Contact Strip at Bottom
- Phone icon (call), WhatsApp icon, Mail icon -- inline
- Small CTA button linking to /contact page

## 7. Twitter/X Social Icon
- Add X (Twitter) icon SVG throughout: Footer social icons section, and anywhere else social icons appear
- Link to `https://x.com/aminReformist`

## 8. Why Choose Us -- Remove Money-Back Guarantee
- Remove the "Money-Back Guarantee" column
- Grid stays at `grid-cols-2 md:grid-cols-4`

## 9. Trust Seals & Payment Section (Homepage Bottom + Footer)

### New Homepage Section (above Persian Store CTA)
- Display trust seal badges in a horizontal row:
  - **Enamad** (government trust seal) -- using provided embed link
  - **Emalls.ir** -- using provided embed link
  - **Torob.com** -- logo/link
  - **Tipax** (courier) -- logo
  - **Post.ir** (Iran Post) -- logo
  - **Zarinpal** (payment gateway) -- logo

### Footer Addition
- Add Enamad trust seal embed in the footer's brand column or as a separate row

## Technical Details

### Files to Create
- Copy `user-uploads://negin-category-2.png` to `src/assets/negin-bulk.png`
- Copy `user-uploads://Sefid222.jpg` to `src/assets/saffron-root-bulk.jpg`

### Files to Modify
1. **`src/components/Header.tsx`** -- Add top bar with FAO text and flags; taller main header; mobile call icon
2. **`src/pages/Index.tsx`** -- Hero overlay/layout; bulk saffron section; remove money-back; trust seals section; 2-col recent slider; remove endorsed link
3. **`src/pages/Products.tsx`** -- 2-col mobile grid
4. **`src/components/Footer.tsx`** -- Add X/Twitter icon; add Enamad trust seal
5. **`src/components/WhatsAppFloat.tsx`** -- Bigger button
6. **`src/index.css`** -- No changes expected

### Section Order on Homepage (Updated)
1. Hero Banner
2. Categories Slider
3. Recent Products Slider (2-col mobile)
4. Featured Products
5. Why Choose Us (4 columns, no money-back)
6. **Bulk Saffron Purchase (NEW)**
7. Why Gonabad Saffron
8. About Banner
9. **Trust Seals & Payment (NEW)**
10. Persian Store CTA

