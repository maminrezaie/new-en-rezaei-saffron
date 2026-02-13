

# Site Updates Plan

## 1. Make Top Bar Non-Sticky (Header)

**File: `src/components/Header.tsx`**

- Change `<header className="sticky top-0 z-50">` to `<header className="relative z-50">` so the header scrolls away with the page instead of staying fixed at the top.

## 2. Bulk Section Updates (Homepage)

**File: `src/pages/Index.tsx`**

- **Less breathing space above headline**: Reduce `py-8 md:py-20` to `py-4 md:py-12` on the bulk section.
- **Change Negin second image**: The uploaded image (`wholesale11-2.png`) will be copied to `src/assets/khatam-negin-bulk-2.png` and used as the second (hover) image in `bulkNeginImages` array, replacing the current `neginBulk`.
- **Move contact icons lower**: Add more top margin to the contact strip (change `mt-8` to `mt-14`) so the icons sit further down in the section.

## 3. Sync Bulk Section with Saffron Price Page

**File: `src/pages/SaffronPrice.tsx`**

- Apply the same padding reduction (`py-4 md:py-12`).
- Import and use the new Negin second image (`khatam-negin-bulk-2.png`) instead of `neginBulk` for the hover image.
- Increase contact icon spacing to match (`mt-14`).

## 4. Storefront Image — Show Lower Part

**File: `src/pages/About.tsx`**

- Change the storefront image from `object-cover` (which centers by default) to `object-cover object-bottom` so the lower part of the building (the storefront entrance) is visible.

## 5. Enlarge Trust Seal Icons

**File: `src/pages/Index.tsx`**

- Increase the trust seal image heights from `h-16`/`h-14`/`h-10` to `h-20`/`h-18`/`h-14` respectively for all logos (Enamad, Emalls, Torob, Tipax, Post.ir, Zarinpal, USDT, Iranicard).

---

## Technical Summary

| File | Changes |
|---|---|
| `src/components/Header.tsx` | `sticky top-0` to `relative` |
| `src/pages/Index.tsx` | Bulk section padding, new Negin hover image, contact icons spacing, trust seal sizes |
| `src/pages/SaffronPrice.tsx` | Sync bulk section padding, new hover image, contact icons spacing |
| `src/pages/About.tsx` | Add `object-bottom` to storefront image |

**New asset**: Copy `user-uploads://wholesale11-2.png` to `src/assets/khatam-negin-bulk-2.png`

