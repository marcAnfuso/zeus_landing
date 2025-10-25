# Zeus Character AI Generation Prompt

## Recommended AI Image Generators
- **Midjourney** (Best quality, subscription required)
- **DALL-E 3** (via ChatGPT Plus or Bing Image Creator)
- **Leonardo.ai** (Free tier available)
- **Stable Diffusion XL** (Open source, requires setup)

---

## Full Prompt for AI Image Generation

```
Create a 3D slot machine character of Zeus, the Greek god. Style should be a mix between colorful casino mascot and epic slot machine hero character.

CHARACTER DESIGN:
- Muscular, powerful Zeus but in slot machine game style (not realistic)
- Big expressive eyes with confident, charismatic expression
- Long flowing white/silver beard and hair (stylized, glossy)
- Strong, heroic physique but with cartoon/game proportions
- Welcoming smile or confident smirk
- Epic but approachable - hero character for slot machine

OUTFIT & STYLING:
- Gold armor/accessories (shoulder guards, arm bands, belt) with shiny glossy finish
- Vibrant red cape or red clothing elements
- Bare chest showing muscular build (slot machine hero style)
- Gold crown or laurel wreath on head
- Lots of gold details - bracelets, belt, armor pieces
- Bright saturated colors - gold, red, white, blue accents
- Glossy, shiny surfaces like slot machine graphics

ACCESSORIES & PROPS:
- Holding a large golden lightning bolt (glowing, stylized)
- Sparkling/glowing effects around the character
- Could have blue energy/electricity effects
- Gold jewelry and accessories
- Dramatic but colorful presentation

STYLE & RENDERING:
- 3D slot machine game character style
- More detailed than simple mascot, but still vibrant and colorful
- Similar to: Zeus characters in casino slot games, mobile game heroes
- Bright, saturated colors with glossy finish
- High contrast lighting with glowing effects
- Epic fantasy slot machine aesthetic
- Mix of Ganamos mascot simplicity + detailed slot game hero

COMPOSITION:
- Chest up or 3/4 body shot preferred
- Heroic, powerful pose
- Looking at viewer with confidence
- Character should feel powerful but inviting
- Epic slot machine hero presence

TECHNICAL SPECS:
- High resolution: 1500x1500px minimum (or 1024x1024 for DALL-E)
- PNG format with transparent background preferred
- Solid black background if transparent not available
- Optimized for web use as hero image
- Vibrant colors that pop on dark backgrounds

MOOD & ATMOSPHERE:
- Powerful, epic, but still fun and inviting
- Slot machine hero character vibe
- Colorful, vibrant, energetic
- "Legendary win" energy
- Gold, red, white, and blue color palette
- Confident and lucky vibe

AVOID:
- Photorealistic rendering
- Muted or dark color palette
- Intimidating or aggressive expression
- Traditional Greek statue look
- Overly complex details
- Realistic skin textures
```

---

## Recommended Prompt for ChatGPT/DALL-E 3 (Gangster Style)

```
Full body 3D slot machine character of Zeus as casino boss: muscular build with normal proportions, white beard, gold sunglasses, red designer shirt unbuttoned, thick gold chains, gold rings, arms crossed confident pose, red pants with gold belt, expensive gold watch, vibrant glossy colors, gangster casino boss style, colorful slot game aesthetic, black background
```

## Previous Prompt (Epic Hero Style)

```
Full body 3D slot machine character of Zeus: muscular build with normal human proportions, white beard, gold laurel crown, gold shoulder armor and arm bands, red cape, bare chest, gold belt with casino chips, thick gold chain necklace, holding large golden lightning bolt, confident smile, vibrant glossy colors, casino game hero style, black background
```

## Alternative Shorter Prompt (for AI with token limits)

```
3D slot machine hero character of Zeus: muscular epic god with slot game style, big expressive eyes, long white flowing beard, gold armor and red cape, holding glowing golden lightning bolt, confident smile, glossy vibrant colorful rendering, casino slot game aesthetic, mix of epic hero and cartoon style, 1024x1024px, black background
```

---

## Prompt Variations

### Variation 1: More Epic/Heroic
```
Epic Zeus slot machine character: powerful muscular god, 3D cartoon style, gold armor with red cape, long white beard, holding massive glowing lightning bolt, heroic confident pose, vibrant glossy colors, slot game hero aesthetic, dramatic lighting with sparkles
```

### Variation 2: Balanced Mix (RECOMMENDED)
```
Zeus character for casino slot game: 3D rendered hero with cartoon proportions, muscular build, gold shoulder armor and arm bands, red cape, white flowing beard, big expressive eyes, holding golden lightning, confident welcoming smile, vibrant saturated colors, glossy finish, black background
```

### Variation 3: With Effects
```
Zeus slot game hero: 3D character, powerful but cartoonish, gold armor pieces, red cape flowing, white beard, holding lightning bolt with blue electricity effects, surrounded by golden sparkles and glow, vibrant colorful rendering, epic casino game style
```

---

## Tips for Best Results

1. **Iteration**: Generate 3-4 variations and pick the best
2. **Aspect Ratio**: Request square format (1:1) or slightly portrait (4:5)
3. **Background**: If transparent background not available, use pure black (#000000)
4. **Consistency**: Use same prompt structure for character variations
5. **Resolution**: Always request high-res output for web optimization

---

## After Generation

Once you have the image:

1. **Optimize**: Use TinyPNG or similar to compress without quality loss
2. **Format**: Convert to WebP for better performance (keep PNG as fallback)
3. **Placement**: Save as `/public/zeus-character.png` (or .webp)
4. **Update Code**: Replace placeholder in [page.tsx:167](app/page.tsx#L167)

Replace this section:
```tsx
<div className="w-64 h-64 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] bg-gradient-to-br from-red-600/20 to-black border-2 border-red-500/30 rounded-3xl flex items-center justify-center relative overflow-hidden group">
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
  <div className="relative z-10 text-center">
    <p className="text-6xl lg:text-8xl mb-4">⚡</p>
    <p className="text-gray-400 text-sm lg:text-base">Zeus Character</p>
    <p className="text-gray-500 text-xs mt-2">(Agregar imagen AI aquí)</p>
  </div>
</div>
```

With:
```tsx
<div className="w-64 h-64 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] relative overflow-hidden group">
  <img
    src="/zeus-character.png"
    alt="Zeus - El poder de los dioses"
    className="w-full h-full object-contain drop-shadow-2xl"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
</div>
```

---

## Inspiration References

Think of combining these styles:
- **Zeus slot machine screenshots**: Epic muscular god with colorful slot game rendering
- **Ganamos dog character**: Glossy, vibrant, casino game aesthetic
- **Mobile game heroes**: Detailed but still cartoonish, colorful, epic but approachable
- **Slot machine bonus characters**: Powerful heroes with vibrant colors and glowing effects
- **Greek god imagery**: Zeus with white beard, gold armor, lightning bolt, but in game style
