/**
 * Typography foundations — single source of truth.
 *
 * Two things live here:
 *
 * 1. `INTER_OPTICAL_PRESETS`: per size × weight `opsz` and `letter-spacing`
 *    values for the Inter variable font. Weights 400–700 are measured values
 *    from Nan Xiao's `inter-optical-sizing` (MIT), which tunes Inter to match
 *    San Francisco's optical sizing. Weights 300 and 350 are our extension:
 *    extrapolated from the 400→450 slope so light display type gets the same
 *    treatment. See `LIGHT_WEIGHTS` and `extrapolateLightWeight`.
 *
 * 2. `TYPE_SCALE`: the semantic text styles (display, h1…h4, body, label…)
 *    each pinned to one preset. `styles/typography.css` is generated from
 *    these tables by `scripts/gen-typography-css.ts`, so the docs pages and
 *    the shipped CSS can never disagree.
 *
 * Source: https://github.com/nanxstats/inter-optical-sizing
 * Post:   https://nanx.me/blog/post/inter-optical-sizing/
 */

export const MEASURED_WEIGHTS = [400, 450, 500, 600, 700] as const
export const LIGHT_WEIGHTS = [300, 350] as const
export const PRESET_WEIGHTS = [...LIGHT_WEIGHTS, ...MEASURED_WEIGHTS] as const

export type MeasuredWeight = (typeof MEASURED_WEIGHTS)[number]
export type LightWeight = (typeof LIGHT_WEIGHTS)[number]
export type PresetWeight = (typeof PRESET_WEIGHTS)[number]

/** Inter's `opsz` axis range (Inter 4.x). */
export const INTER_OPSZ_MIN = 14
export const INTER_OPSZ_MAX = 32

export type OpticalSetting = {
  /** `font-variation-settings: "opsz" <value>` */
  opsz: number
  /** `letter-spacing` in px; 0 means "don't emit". */
  ls: number
}

type MeasuredRow = Record<MeasuredWeight, OpticalSetting>

/**
 * Measured values, verbatim from `src/inter-optical-sizing.scss` upstream.
 * Sizes 12–24 are text sizes, 28–80 display sizes. Keep this table in sync
 * with upstream rather than hand-tuning; tune our own styles in TYPE_SCALE.
 */
const MEASURED: Record<number, MeasuredRow> = {
  12: { 400: { opsz: 15.1, ls: 0 }, 450: { opsz: 14, ls: 0.01 }, 500: { opsz: 14, ls: 0.04 }, 600: { opsz: 14, ls: 0.11 }, 700: { opsz: 14, ls: 0.18 } },
  13: { 400: { opsz: 17.5, ls: 0 }, 450: { opsz: 16.4, ls: 0 }, 500: { opsz: 15.1, ls: 0 }, 600: { opsz: 14, ls: 0.05 }, 700: { opsz: 14, ls: 0.13 } },
  14: { 400: { opsz: 19.5, ls: 0 }, 450: { opsz: 18.5, ls: 0 }, 500: { opsz: 17.4, ls: 0 }, 600: { opsz: 14.7, ls: 0 }, 700: { opsz: 14, ls: 0.07 } },
  15: { 400: { opsz: 21.5, ls: 0 }, 450: { opsz: 20.6, ls: 0 }, 500: { opsz: 19.6, ls: 0 }, 600: { opsz: 17.2, ls: 0 }, 700: { opsz: 14.1, ls: 0 } },
  16: { 400: { opsz: 23.1, ls: 0 }, 450: { opsz: 22.3, ls: 0 }, 500: { opsz: 21.4, ls: 0 }, 600: { opsz: 19.2, ls: 0 }, 700: { opsz: 16.4, ls: 0 } },
  17: { 400: { opsz: 25.5, ls: 0 }, 450: { opsz: 24.8, ls: 0 }, 500: { opsz: 24.1, ls: 0 }, 600: { opsz: 22.1, ls: 0 }, 700: { opsz: 19.8, ls: 0 } },
  18: { 400: { opsz: 26.3, ls: 0 }, 450: { opsz: 25.6, ls: 0 }, 500: { opsz: 24.9, ls: 0 }, 600: { opsz: 23, ls: 0 }, 700: { opsz: 20.7, ls: 0 } },
  19: { 400: { opsz: 27.1, ls: 0 }, 450: { opsz: 26.4, ls: 0 }, 500: { opsz: 25.7, ls: 0 }, 600: { opsz: 23.8, ls: 0 }, 700: { opsz: 21.7, ls: 0 } },
  20: { 400: { opsz: 30.4, ls: 0 }, 450: { opsz: 29.8, ls: 0 }, 500: { opsz: 29.2, ls: 0 }, 600: { opsz: 27.7, ls: 0 }, 700: { opsz: 25.8, ls: 0 } },
  21: { 400: { opsz: 31.7, ls: 0 }, 450: { opsz: 31.3, ls: 0 }, 500: { opsz: 30.8, ls: 0 }, 600: { opsz: 29.2, ls: 0 }, 700: { opsz: 27.5, ls: 0 } },
  22: { 400: { opsz: 32, ls: -0.07 }, 450: { opsz: 32, ls: -0.04 }, 500: { opsz: 32, ls: -0.01 }, 600: { opsz: 30.9, ls: 0 }, 700: { opsz: 29, ls: 0 } },
  23: { 400: { opsz: 32, ls: -0.11 }, 450: { opsz: 32, ls: -0.08 }, 500: { opsz: 32, ls: -0.04 }, 600: { opsz: 31.5, ls: 0 }, 700: { opsz: 29.5, ls: 0 } },
  24: { 400: { opsz: 32, ls: -0.15 }, 450: { opsz: 32, ls: -0.11 }, 500: { opsz: 32, ls: -0.07 }, 600: { opsz: 31.8, ls: 0 }, 700: { opsz: 29.9, ls: 0 } },
  28: { 400: { opsz: 32, ls: -0.15 }, 450: { opsz: 32, ls: -0.12 }, 500: { opsz: 32, ls: -0.05 }, 600: { opsz: 31.7, ls: 0 }, 700: { opsz: 29.4, ls: 0 } },
  32: { 400: { opsz: 32, ls: -0.26 }, 450: { opsz: 32, ls: -0.2 }, 500: { opsz: 32, ls: -0.14 }, 600: { opsz: 32, ls: -0.01 }, 700: { opsz: 30.6, ls: 0 } },
  40: { 400: { opsz: 32, ls: -0.45 }, 450: { opsz: 32, ls: -0.4 }, 500: { opsz: 32, ls: -0.3 }, 600: { opsz: 32, ls: -0.17 }, 700: { opsz: 32, ls: -0.03 } },
  48: { 400: { opsz: 32, ls: -0.63 }, 450: { opsz: 32, ls: -0.56 }, 500: { opsz: 32, ls: -0.48 }, 600: { opsz: 32, ls: -0.3 }, 700: { opsz: 32, ls: -0.12 } },
  56: { 400: { opsz: 32, ls: -0.87 }, 450: { opsz: 32, ls: -0.77 }, 500: { opsz: 32, ls: -0.66 }, 600: { opsz: 32, ls: -0.43 }, 700: { opsz: 32, ls: -0.19 } },
  64: { 400: { opsz: 32, ls: -1.01 }, 450: { opsz: 32, ls: -0.91 }, 500: { opsz: 32, ls: -0.79 }, 600: { opsz: 32, ls: -0.54 }, 700: { opsz: 32, ls: -0.3 } },
  72: { 400: { opsz: 32, ls: -1.26 }, 450: { opsz: 32, ls: -1.13 }, 500: { opsz: 32, ls: -0.99 }, 600: { opsz: 32, ls: -0.73 }, 700: { opsz: 32, ls: -0.45 } },
  80: { 400: { opsz: 32, ls: -1.56 }, 450: { opsz: 32, ls: -1.41 }, 500: { opsz: 32, ls: -1.28 }, 600: { opsz: 32, ls: -0.97 }, 700: { opsz: 32, ls: -0.72 } },
}

export const PRESET_SIZES = Object.keys(MEASURED)
  .map(Number)
  .sort((a, b) => a - b)

export type PresetSize = (typeof PRESET_SIZES)[number]

/** Sizes the upstream table treats as running text vs display. */
export const TEXT_SIZES = PRESET_SIZES.filter((size) => size <= 24)
export const DISPLAY_SIZES = PRESET_SIZES.filter((size) => size > 24)

const round = (value: number, places: number) => {
  const factor = 10 ** places
  // Normalise -0 so the generated CSS never prints "-0".
  return Math.round(value * factor) / factor || 0
}

/**
 * Light-weight extension (300, 350).
 *
 * Upstream only measured 400+. Across every size the trend from 400→450 is
 * monotonic: heavier weight → lower opsz (tighter counters) and more positive
 * tracking. We continue that line backwards from 400 using the 400→450 slope,
 * clamp opsz to Inter's axis, and round to the same precision as upstream.
 * These are a starting point, not measurements — adjust here if the eye
 * disagrees, and regenerate the CSS.
 */
export function extrapolateLightWeight(row: MeasuredRow, weight: LightWeight): OpticalSetting {
  const base = row[400]
  const next = row[450]
  const steps = (weight - 400) / 50 // -2 for 300, -1 for 350
  const opsz = base.opsz + (next.opsz - base.opsz) * steps
  const ls = base.ls + (next.ls - base.ls) * steps
  return {
    opsz: round(Math.min(INTER_OPSZ_MAX, Math.max(INTER_OPSZ_MIN, opsz)), 1),
    ls: round(ls, 2),
  }
}

export type PresetRow = Record<PresetWeight, OpticalSetting>

/** Full table: measured 400–700 plus extrapolated 300/350, keyed by px size. */
export const INTER_OPTICAL_PRESETS: Record<number, PresetRow> = Object.fromEntries(
  PRESET_SIZES.map((size) => {
    const row = MEASURED[size]
    return [
      size,
      {
        300: extrapolateLightWeight(row, 300),
        350: extrapolateLightWeight(row, 350),
        ...row,
      } satisfies PresetRow,
    ]
  }),
)

export const isMeasuredWeight = (weight: number): weight is MeasuredWeight =>
  (MEASURED_WEIGHTS as readonly number[]).includes(weight)

export const isPresetWeight = (weight: number): weight is PresetWeight =>
  (PRESET_WEIGHTS as readonly number[]).includes(weight)

export function getPreset(size: number, weight: PresetWeight): OpticalSetting | undefined {
  return INTER_OPTICAL_PRESETS[size]?.[weight]
}

/** Nearest size that has a preset row (for playgrounds and fluid sizes). */
export function nearestPresetSize(px: number): number {
  return PRESET_SIZES.reduce((best, size) => (Math.abs(size - px) < Math.abs(best - px) ? size : best))
}

/** CSS custom property names, matching upstream's `--inter-opsz-<size>-<weight>`. */
export const opszVar = (size: number, weight: PresetWeight) => `--inter-opsz-${size}-${weight}`
export const lsVar = (size: number, weight: PresetWeight) => `--inter-ls-${size}-${weight}`
/** Upstream-compatible utility class, e.g. `inter-opt-16-400`. */
export const presetClass = (size: number, weight: PresetWeight) => `inter-opt-${size}-${weight}`

/**
 * Named weights. Tailwind already ships light/normal/medium/semibold/bold;
 * these two fill the 300–400 band the brand's display type lives in and the
 * 450 "text" weight upstream found matches SF Text. Emitted into `@theme` so
 * `font-book` / `font-text` work as utilities.
 */
export const WEIGHT_TOKENS = [
  { name: "light", weight: 300, builtIn: true, usage: "Largest display sizes (64–80px)." },
  { name: "book", weight: 350, builtIn: false, usage: "Display and lead text; the brand's default headline weight." },
  { name: "normal", weight: 400, builtIn: true, usage: "Body copy." },
  { name: "text", weight: 450, builtIn: false, usage: "Small UI text that needs a touch more presence (captions, dense tables)." },
  { name: "medium", weight: 500, builtIn: true, usage: "Headings, labels, buttons." },
  { name: "semibold", weight: 600, builtIn: true, usage: "Emphasis inside UI text." },
  { name: "bold", weight: 700, builtIn: true, usage: "Rare; numerals and strong emphasis." },
] as const satisfies readonly { name: string; weight: PresetWeight; builtIn: boolean; usage: string }[]

export type TypeStyle = {
  /** Utility name: `text-<name>` */
  name: string
  label: string
  group: "display" | "heading" | "body" | "ui"
  size: PresetSize
  weight: PresetWeight
  lineHeight: number
  /** Extra declarations layered on top of the preset. */
  extra?: Record<string, string>
  usage: string
  /** HTML element the style is intended for, for the docs. */
  element?: string
}

/**
 * The semantic scale. Display sizes sit in the 300–400 band (light, airy,
 * like dm.sh); headings step up to 500 so hierarchy reads at a glance;
 * body stays at 400; small UI text uses 450/500 where upstream's data shows
 * it holds up better at 12–14px.
 */
export const TYPE_SCALE: readonly TypeStyle[] = [
  { name: "display-2xl", label: "Display 2XL", group: "display", size: 80, weight: 300, lineHeight: 1, usage: "Hero statements, one line.", element: "h1" },
  { name: "display-xl", label: "Display XL", group: "display", size: 72, weight: 300, lineHeight: 1.05, usage: "Marketing hero headings.", element: "h1" },
  { name: "display-lg", label: "Display LG", group: "display", size: 64, weight: 350, lineHeight: 1.05, usage: "Section openers on marketing pages.", element: "h1" },
  { name: "display", label: "Display", group: "display", size: 56, weight: 350, lineHeight: 1.1, usage: "Page titles on landing pages.", element: "h1" },
  { name: "display-sm", label: "Display SM", group: "display", size: 48, weight: 350, lineHeight: 1.1, usage: "Large numerals, stat callouts.", element: "h2" },
  { name: "h1", label: "Heading 1", group: "heading", size: 40, weight: 500, lineHeight: 1.15, usage: "App page titles.", element: "h1" },
  { name: "h2", label: "Heading 2", group: "heading", size: 32, weight: 500, lineHeight: 1.2, usage: "Major sections.", element: "h2" },
  { name: "h3", label: "Heading 3", group: "heading", size: 24, weight: 500, lineHeight: 1.3, usage: "Card and panel titles.", element: "h3" },
  { name: "h4", label: "Heading 4", group: "heading", size: 20, weight: 500, lineHeight: 1.4, usage: "Sub-sections, dialog titles.", element: "h4" },
  { name: "lead", label: "Lead", group: "body", size: 20, weight: 350, lineHeight: 1.5, usage: "Intro paragraph under a display heading.", element: "p" },
  { name: "body-lg", label: "Body LG", group: "body", size: 18, weight: 400, lineHeight: 1.6, usage: "Long-form reading.", element: "p" },
  { name: "body", label: "Body", group: "body", size: 16, weight: 400, lineHeight: 1.5, usage: "Default paragraph text.", element: "p" },
  { name: "body-sm", label: "Body SM", group: "body", size: 14, weight: 400, lineHeight: 1.5, usage: "Dense UI copy, table cells, descriptions.", element: "p" },
  { name: "label", label: "Label", group: "ui", size: 14, weight: 500, lineHeight: 1.25, usage: "Form labels, buttons, tabs.", element: "label" },
  { name: "caption", label: "Caption", group: "ui", size: 12, weight: 450, lineHeight: 1.35, usage: "Helper text, timestamps, footnotes.", element: "span" },
  {
    name: "overline",
    label: "Overline",
    group: "ui",
    size: 12,
    weight: 500,
    lineHeight: 1.2,
    extra: { "text-transform": "uppercase", "letter-spacing": "0.08em" },
    usage: "Eyebrow labels above headings. Tracking overrides the preset on purpose.",
    element: "span",
  },
]

export const TYPE_SCALE_GROUPS: { id: TypeStyle["group"]; label: string; blurb: string }[] = [
  { id: "display", label: "Display", blurb: "Light weights, tight tracking. opsz is pinned at 32 so strokes stay delicate." },
  { id: "heading", label: "Headings", blurb: "Medium weight at 20–40px. Hierarchy comes from size, not from going bold." },
  { id: "body", label: "Body", blurb: "Regular weight with opsz near the actual size, so counters open up for reading." },
  { id: "ui", label: "UI text", blurb: "Small sizes drop to opsz 14 and gain positive tracking so they stay legible." },
]

export const typeStyleClass = (style: TypeStyle) => `text-${style.name}`

/** The CSS declarations for one style, as the generator emits them. */
export function typeStyleDeclarations(style: TypeStyle): Record<string, string> {
  const preset = INTER_OPTICAL_PRESETS[style.size][style.weight]
  const declarations: Record<string, string> = {
    "font-size": `${round(style.size / 16, 4)}rem`,
    "line-height": String(style.lineHeight),
    "font-weight": String(style.weight),
    "font-variation-settings": `"opsz" var(${opszVar(style.size, style.weight)})`,
  }
  if (preset.ls !== 0) declarations["letter-spacing"] = `var(${lsVar(style.size, style.weight)})`
  return { ...declarations, ...style.extra }
}
