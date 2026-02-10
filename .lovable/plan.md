

# Fix Iraqi Flag in Header

## Problem
The Iraqi flag emoji (🇮🇶) renders as plain text "IQ" on some browsers/systems instead of displaying the actual flag.

## Solution
Replace the emoji with an inline SVG of the Iraqi flag (red-white-black horizontal stripes with green Arabic text), matching how the Kurdish flag is already implemented as an SVG.

## Technical Details

### File: `src/components/Header.tsx`
- **Desktop nav** (around line 72): Replace the 🇮🇶 emoji with an inline SVG of the Iraqi flag (red/white/black stripes with green "Allahu Akbar" text)
- **Mobile nav** (around line 119): Same replacement
- The SVG will match the same dimensions as the Kurdish flag (`w-5 h-5 rounded-full`)

The Iraqi flag SVG will have:
- Top red stripe
- Middle white stripe with green Arabic script
- Bottom black stripe

