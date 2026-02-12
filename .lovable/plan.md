# Top Bar Updates

## Changes to `src/components/Header.tsx`

### 1. Center-align the endorsement text and make it a link

- Wrap the "Endorsed by UN Food & Agriculture Org -- FAO" text in an `<a>` tag linking to `https://www.fao.org/giahs/giahs-around-the-world/iran-qanat-based-saffron-system/en`
- Opens in a new tab (`target="_blank"`)
- Center the text using `text-center` and `flex-1`

### 2. Move social media icons to the left side

- Currently the language flags sit on the right side of the top bar
- Move them to the left side instead, so the layout becomes: **[flags] --- [centered FAO text] --- [empty right]**
- Use `flex` with `justify-center` for the text and position flags on the left with absolute or flex ordering

### Technical approach

- Change the top bar container from `justify-between` to a 3-column flex layout
- Left column: language flag icons (desktop only)
- Center column: FAO endorsement link (centered)
- Right column: empty spacer for balance  
  
top bar on mobile view only show the endorse text and its link