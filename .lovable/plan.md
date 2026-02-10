

# Homepage, About Page, and Header Updates

## 1. About Page: Replace storefront image
- Save the uploaded image (`user-uploads://storefront2.png`) as `src/assets/shop-image.jpg` (overwrite existing)
- Reduce image height with `max-h-[350px]` and `object-cover` to make it slightly shorter

## 2. Homepage: Reduce spacing between Categories and Recent Products
- Change the Categories section bottom padding from `pb-6 md:pb-8` to `pb-2 md:pb-3`
- Reduce the Recent Products section top padding from `py-10 md:py-16` to `py-4 md:py-8`

## 3. Homepage: Bigger section titles
- **"Why Choose Us"**: Increase heading from `text-base md:text-lg` to `text-2xl md:text-3xl`
- **"Why Gonabad Rezaei Saffron"**: Change to **"Why Gonabad Saffron"** (remove "Rezaei") and increase heading from `text-base md:text-lg` to `text-2xl md:text-3xl`

## 4. Header: Add Arabic and Kurdish language flags
- Add two flag links after the Persian store pill in both desktop and mobile nav:
  - Iraqi flag (for Arabic): links to `https://rezaei-saffron.ir/Arabic/`
  - Kurdish flag (Kurdistan): links to `https://rezaei-saffron.ir/Kurdish/`
- Styled as small circular flag buttons next to the existing Persian store link

## Technical Details

### Files changed:
- `src/assets/shop-image.jpg` -- replaced with new storefront image
- `src/pages/About.tsx` -- add `max-h-[350px]` to the image
- `src/pages/Index.tsx` -- reduce spacing, enlarge headings, rename section
- `src/components/Header.tsx` -- add Arabic (🇮🇶) and Kurdish flag links in both desktop and mobile nav menus

