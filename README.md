# darkmatter ui

The Dark Matter Labs design system as a [shadcn](https://ui.shadcn.com/docs/registry) registry: theme tokens, typography presets, UI primitives, and blocks for React + Tailwind CSS v4.

Served from GitHub Pages at **https://darkmatter.github.io/ui**.

## Install

One-off:

```bash
npx shadcn@latest add https://darkmatter.github.io/ui/r/typography.json
```

Or register the namespace once in `components.json`:

```json
{
  "registries": {
    "@darkmatter": "https://darkmatter.github.io/ui/r/{name}.json"
  }
}
```

then

```bash
npx shadcn@latest add @darkmatter/dm-theme @darkmatter/typography @darkmatter/button
```

Re-run with `--overwrite` to pull updates. The full index is at [`/r/registry.json`](https://darkmatter.github.io/ui/r/registry.json).

## What's in it

| Item | What you get |
| --- | --- |
| `dm-theme` | The brand theme: cool near-black dark-by-default palette, radius, font stacks, as shadcn CSS variables. |
| `typography` | Inter optical-sizing presets (`opsz` + tracking per size × weight, incl. light 300/350), the semantic `text-*` scale, and per-family tracking/leading presets for Geist, Geist Mono, Montserrat, Lora, Source Code Pro, and Monaspace Neon. |
| `button`, `card`, `dialog`, … | UI primitives on Radix, styled for the theme. |
| `blank`, `dashboard`, `store`, … | Application blocks and composed components. |

### Typography

`styles/typography.css` and `styles/font-presets.css` are generated from `lib/typography.ts` and `lib/font-presets.ts` by `scripts/gen-typography-css.ts`. Edit the tables, not the CSS. Inter needs its optical-size axis; with `next/font`:

```ts
Inter({ subsets: ["latin"], axes: ["opsz"], variable: "--face-inter" })
```

Families resolve through `--face-<id>` variables, falling back to the family name so `@fontsource` imports work too.

## How this repo is maintained

This repository is **generated**. Its contents are synced by [Copybara](https://github.com/google/copybara) from an internal Dark Matter Labs repository on every merge there, with internal-only surfaces filtered out. Issues are welcome here; pull requests will be applied upstream rather than merged directly, so expect them to land via a sync commit.

## License

MIT. Inter optical-sizing data is derived from [nanxstats/inter-optical-sizing](https://github.com/nanxstats/inter-optical-sizing) (MIT, © 2025 Nan Xiao).
