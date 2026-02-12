

# Site Updates Plan

## 1. Top Bar -- Smaller Social Icons & Lighter Background

**File: `src/components/Header.tsx`**

- Change social icon size from `w-4 h-4` to `w-3.5 h-3.5` in the SocialIcons component
- Change top bar background from `bg-primary` to a lighter red, e.g. `bg-primary/80` or a custom lighter crimson color

## 2. Bulk Section Updates

**File: `src/pages/Index.tsx`**

- Reduce top padding on bulk section from `py-12` to `py-8` (less breathing space above)
- Replace first bulk images:
  - Copy `user-uploads://bulk1.jpg` to `src/assets/bulk-negin-1.jpg` (new first image for Negin bulk)
  - Copy `user-uploads://saffron_root-bulk.png` to `src/assets/bulk-root-1.png` (new first image for Root bulk)
  - Current `neginBulk` becomes second image for Negin (hover/fade)
  - Current `saffronRootBulk` becomes second image for Root (hover/fade)
  - Copy `user-uploads://wholesale11.png` -- this appears to be a Khatam tin image, will check if needed as alternate
- Make contact icons at bottom of bulk section much bigger: change `w-5 h-5` to `w-10 h-10` for Phone, WhatsApp SVG, and Mail icons. Keep text labels at small size.

## 3. Trust Seal Logo Replacements

**File: `src/pages/Index.tsx`**

- Copy uploaded logo images to `src/assets/`:
  - `user-uploads://Enamad.png` to `src/assets/trust-enamad.png`
  - `user-uploads://Tipax.png` to `src/assets/trust-tipax.png`
  - `user-uploads://Post-ir2.png` to `src/assets/trust-post-ir.png`
  - `user-uploads://zarinpal.png` to `src/assets/trust-zarinpal.png`
- Replace the current favicon-based logos with imported image assets
- Keep Enamad link, Emalls embed, and add proper images for Torob, Tipax, Post.ir, Zarinpal, USDT, and Iranicard
- Note: USDT and Iranicard logo images were not attached in this message -- will use placeholder styling or check if previously uploaded

## 4. Saffron Price Page -- Sync Bulk Section

**File: `src/pages/SaffronPrice.tsx`**

- Update the bulk section to match the homepage version (same new images, same bigger contact icons, same layout)
- Import the new bulk image assets

## Files to Create/Copy
- `src/assets/bulk-negin-1.jpg` (from `user-uploads://bulk1.jpg`)
- `src/assets/bulk-root-1.png` (from `user-uploads://saffron_root-bulk.png`)
- `src/assets/trust-enamad.png` (from `user-uploads://Enamad.png`)
- `src/assets/trust-tipax.png` (from `user-uploads://Tipax.png`)
- `src/assets/trust-post-ir.png` (from `user-uploads://Post-ir2.png`)
- `src/assets/trust-zarinpal.png` (from `user-uploads://zarinpal.png`)

## Files to Modify
1. `src/components/Header.tsx` -- smaller social icons, lighter top bar bg
2. `src/pages/Index.tsx` -- bulk images swap, bigger contact icons, trust seal logos, less top padding on bulk
3. `src/pages/SaffronPrice.tsx` -- sync bulk section with homepage changes

