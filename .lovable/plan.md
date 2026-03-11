

# Fix Khaleesi Color Palette to Match Reference Design

## Problem
The current palette is too washed-out and high-lightness (97%, 95%, 93%), making the site look bland and flat. The reference shows richer, warmer champagne/tan/nude tones with visible warmth and depth.

## Color Changes (index.css)

Shift the entire palette warmer and deeper to match the reference:

| Token | Current | New | Rationale |
|-------|---------|-----|-----------|
| `--background` | `30 33% 97%` | `30 40% 93%` | Warmer, visible cream instead of near-white |
| `--card` | `30 30% 95%` | `30 45% 88%` | Richer champagne for card sections |
| `--primary` | `25 35% 28%` | `25 40% 32%` | Slightly warmer brown for buttons/accents |
| `--secondary` | `30 30% 90%` | `30 40% 84%` | Deeper sand tone |
| `--muted` | `30 20% 93%` | `30 35% 88%` | More visible muted background |
| `--muted-foreground` | `20 15% 38%` | `20 20% 35%` | Slightly richer text |
| `--accent` | `30 35% 85%` | `32 45% 80%` | More saturated champagne accent |
| `--border` | `30 20% 85%` | `30 30% 78%` | More visible borders for definition |
| `--khaleesi-sand` | `30 30% 90%` | `30 45% 85%` | Richer sand |
| `--khaleesi-champagne` | `32 35% 85%` | `32 50% 78%` | Deeper champagne |
| `--khaleesi-nude` | `28 28% 78%` | `28 35% 72%` | Warmer nude |
| `--khaleesi-gold` | `38 65% 48%` | `35 70% 50%` | Richer gold |

## Component Adjustments

- **HeroSection**: Strengthen the gradient overlay for better text readability against the warmer palette
- **GenderCollections / CategoryGrid**: The warmer card backgrounds will naturally add more depth and contrast to these sections
- **ProductCard**: Image container `bg-card` will now be a visible champagne instead of near-white
- **Footer**: Border and background will have more definition

## Scope
- Edit `src/index.css` only -- the warmer, more saturated base tokens will cascade through all components automatically via CSS variables

