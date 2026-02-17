

## Plan: Product Data Updates, Emalls Image, Wider Slider Cards, and Saffron Price Page Link

### 1. Fix all "4.6g" / "4.6 grams" weights to "4.608g" / "4.608 grams"

**File: `src/data/products.ts`**
- Change every `weight: "4.6 grams"` to `weight: "4.608 grams"`
- Change every `weight: "4.608 grams"` (already correct in some) -- leave as-is
- Affected products: Negin Saffron (4.6g), Bunch Saffron (4.6g), White Saffron Root (4.6g), Economy Saffron (4.6g), Gift Wooden Box (4.6g), Gift Round Tin (4.6g)
- Products already at "4.608 grams" (Velvet Box, Khatam) stay unchanged

### 2. Round all product prices to whole numbers

**File: `src/data/products.ts`**
- `$9.29` -> `$9`
- `$1.79` -> `$2`
- `$857.14` -> `$857`
- `$6.07` -> `$6`
- `$2.00` -> `$2`
- `$1.07` -> `$1` (Saffron Root, Mulberry, Apricot)
- `$2.86` -> `$3` (Economy Saffron, Barberry 500g)
- `$8.93` -> `$9`
- `$7.14` -> `$7`
- `$8.57` -> `$9` (Velvet Box, Khatam)
- `$5.36` -> `$5`
- `$0.86` -> `$1`
- `$0.57` -> `$1`

### 3. Make homepage Recent Products slider cards a bit wider

**File: `src/pages/Index.tsx`**
- Change `RecentProductCard` width from `w-[calc(50%-6px)] md:w-[calc(20%-10px)]` to `w-[calc(55%-6px)] md:w-[calc(22%-10px)]`

### 4. Replace Emalls trust seal with uploaded PNG

- Copy `user-uploads://Emalls.png` to `src/assets/emalls-trust.png`
- Import it in `Index.tsx`
- Replace the external URL `https://service.emalls.ir/neshan?id=74549` with the imported asset

### 5. Saffron Price page -- add link section for daily updated prices

**File: `src/pages/SaffronPrice.tsx`**
- In the CTA section (lines 200-212), enhance the presentation:
  - Add Persian text introducing the link as a global, daily-updated source for Iranian saffron market prices
  - Keep the existing link to `https://rezaei-saffron.ir/saffron-today-price/`
  - Add descriptive Persian text like: "منبع جهانی قیمت روز زعفران ایران -- به‌روزرسانی روزانه"

### Technical Summary

| Change | File(s) |
|--------|---------|
| Weight "4.6" to "4.608" | `src/data/products.ts` |
| Round prices to whole numbers | `src/data/products.ts` |
| Wider slider cards | `src/pages/Index.tsx` (line 526) |
| Emalls trust seal image | Copy asset + update `src/pages/Index.tsx` (line 480) |
| Saffron price page link section | `src/pages/SaffronPrice.tsx` (lines 200-212) |

