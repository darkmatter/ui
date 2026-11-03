/**
 * Per-family type presets for every face the brand uses.
 *
 * Inter is the only family here with an `opsz` axis, and its presets are the
 * measured table in `lib/typography.ts`. The other six families have no
 * optical-size axis, so "preset" for them means the two things CSS can still
 * tune per size × weight: letter-spacing and line-height.
 *
 * Those values are NOT overlay-measured the way Inter's are. They are drawn
 * as curves shaped like Inter's measured one (flat or slightly positive at
 * 12–16px, increasingly negative toward 80px; heavier weights track looser,
 * lighter weights tighter) with per-family anchors chosen by eye. Treat them
 * as a starting point: adjust the anchors below, regenerate, and look.
 *
 * `styles/font-presets.css` is generated from this file by
 * `scripts/gen-typography-css.ts`.
 */
import {
  INTER_OPTICAL_PRESETS,
  PRESET_SIZES,
  PRESET_WEIGHTS,
  type OpticalSetting,
  type PresetWeight,
} from "./typography.ts" // relative + extension so the Node generator can import it without a bundler

export type FontAxis = "wght" | "opsz" | "wdth" | "slnt"
export type FontCategory = "sans" | "serif" | "mono" | "display"

export type FontFamilyPreset = {
  /** Stable id; also the Tailwind utility suffix (`font-<id>`) and CSS var (`--font-<id>`). */
  id: string
  label: string
  category: FontCategory
  /** What the brand uses it for. */
  role: string
  /** Where the site loads it from. */
  source: string
  axes: FontAxis[]
  /** Inclusive `wght` range the loaded face supports. */
  weightRange: [number, number]
  /**
   * Letter-spacing anchors in em at weight 400, keyed by px size. Sizes
   * between anchors are linearly interpolated.
   */
  tracking: Record<number, number>
  /** Extra em of tracking per 100 weight units above 400 (negative below). */
  weightSlope: number
  /** Line-height anchors keyed by px size, interpolated the same way. */
  leading: Record<number, number>
  notes: string[]
}

const SANS_LEADING = { 12: 1.5, 16: 1.5, 20: 1.4, 24: 1.3, 32: 1.2, 48: 1.1, 80: 1 }
const MONO_LEADING = { 12: 1.6, 16: 1.6, 20: 1.5, 24: 1.35, 32: 1.2, 48: 1.1, 80: 1 }
const PROSE_LEADING = { 12: 1.6, 16: 1.65, 20: 1.5, 24: 1.35, 32: 1.25, 48: 1.15, 80: 1.05 }

export const FONT_FAMILIES: readonly FontFamilyPreset[] = [
  {
    id: "inter",
    label: "Inter",
    category: "sans",
    role: "Default sans: body, UI, headings, display. The only family with an optical-size axis.",
    source: "next/font/google",
    axes: ["wght", "opsz"],
    weightRange: [100, 900],
    // Unused: Inter resolves through the measured optical table instead.
    tracking: { 12: 0, 80: 0 },
    weightSlope: 0,
    leading: SANS_LEADING,
    notes: ["Presets are the measured opsz + tracking table; see the sections above."],
  },
  {
    id: "geist",
    label: "Geist",
    category: "sans",
    role: "Alternative sans for product surfaces that want Vercel-adjacent texture; body and UI copy.",
    source: "next/font/google",
    axes: ["wght"],
    weightRange: [100, 900],
    tracking: { 12: 0.005, 16: 0, 24: -0.01, 32: -0.015, 48: -0.022, 80: -0.03 },
    weightSlope: 0.003,
    leading: SANS_LEADING,
    notes: [
      "Slightly wider than Inter at the same size, so display sizes take about 50% more negative tracking.",
      "No opsz axis: small sizes rely on tracking alone, so avoid it below 12px.",
    ],
  },
  {
    id: "montserrat",
    label: "Montserrat",
    category: "display",
    role: "Headings (`font-heading`). Geometric, wide; reads as the dm.sh marketing voice.",
    source: "next/font/google",
    axes: ["wght"],
    weightRange: [100, 900],
    tracking: { 12: 0.01, 16: 0.005, 24: -0.005, 32: -0.012, 48: -0.02, 80: -0.03 },
    weightSlope: 0.003,
    leading: SANS_LEADING,
    notes: [
      "Round, open counters look loose at display sizes; the curve goes negative earlier than the sans faces.",
      "Not a body face: keep it at 20px and above.",
    ],
  },
  {
    id: "lora",
    label: "Lora",
    category: "serif",
    role: "Long-form prose (`font-serif`): blog and wiki body text.",
    source: "next/font/google",
    axes: ["wght"],
    weightRange: [400, 700],
    tracking: { 12: 0.005, 16: 0, 24: -0.004, 32: -0.008, 48: -0.012, 80: -0.018 },
    weightSlope: 0.003,
    leading: PROSE_LEADING,
    notes: [
      "Serifs carry their own rhythm; tracking stays close to zero and only tightens gently for display.",
      "The variable face starts at 400, so the 300 and 350 columns are not available.",
    ],
  },
  {
    id: "geist-mono",
    label: "Geist Mono",
    category: "mono",
    role: "Brand mono (`font-mono`): hero display, eyebrows, stats, terminal UI, code.",
    source: "next/font/google",
    axes: ["wght"],
    weightRange: [100, 900],
    tracking: { 12: 0, 16: 0, 24: -0.005, 32: -0.01, 48: -0.02, 80: -0.03 },
    weightSlope: 0.0015,
    leading: MONO_LEADING,
    notes: [
      "Large mono display goes light and single-case (the dm.sh hero rule); the 48–80px rows assume weight 300.",
      "Tracking at text sizes stays 0 so columns of code and numbers keep their grid.",
    ],
  },
  {
    id: "source-code-pro",
    label: "Source Code Pro",
    category: "mono",
    role: "Code blocks and editors where a neutral, highly legible mono is wanted.",
    source: "next/font/google",
    axes: ["wght"],
    weightRange: [200, 900],
    tracking: { 12: 0, 24: 0, 32: -0.005, 48: -0.012, 80: -0.02 },
    weightSlope: 0.0015,
    leading: MONO_LEADING,
    notes: ["A code face first; tracking is untouched through 24px and only eases in for display use."],
  },
  {
    id: "monaspace-neon",
    label: "Monaspace Neon",
    category: "mono",
    role: "Terminal and code surfaces that want texture healing; the legacy registry's mono.",
    source: "@fontsource/monaspace-neon (static 300–700)",
    axes: ["wght"],
    weightRange: [200, 800],
    tracking: { 12: 0, 16: 0, 24: -0.005, 32: -0.01, 48: -0.018, 80: -0.025 },
    weightSlope: 0.0015,
    leading: MONO_LEADING,
    notes: [
      "The variable build also has wdth (100–125) and slnt axes; fontsource ships static weights, so both stay at default here.",
      "Texture healing already evens out spacing between glyph pairs, so tracking is kept conservative.",
    ],
  },
]

export const FONT_FAMILIES_BY_ID: Record<string, FontFamilyPreset> = Object.fromEntries(
  FONT_FAMILIES.map((family) => [family.id, family]),
)

/** Piecewise-linear lookup over `{ size: value }` anchors. */
export function interpolateAnchors(anchors: Record<number, number>, size: number): number {
  const points = Object.entries(anchors)
    .map(([key, value]) => [Number(key), value] as const)
    .sort((a, b) => a[0] - b[0])
  if (size <= points[0][0]) return points[0][1]
  const last = points[points.length - 1]
  if (size >= last[0]) return last[1]
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i]
    if (size <= x1) {
      const [x0, y0] = points[i - 1]
      return y0 + ((size - x0) / (x1 - x0)) * (y1 - y0)
    }
  }
  return last[1]
}

const round = (value: number, places: number) => {
  const factor = 10 ** places
  return Math.round(value * factor) / factor || 0
}

export type FamilySetting = {
  /** letter-spacing in px (0 = don't emit) */
  ls: number
  lineHeight: number
  /** Only for families with an opsz axis. */
  opsz?: number
}

/** Weights from the shared ramp that the loaded face can actually render. */
export function familyWeights(family: FontFamilyPreset): PresetWeight[] {
  return PRESET_WEIGHTS.filter((weight) => weight >= family.weightRange[0] && weight <= family.weightRange[1])
}

export function familyPreset(family: FontFamilyPreset, size: number, weight: PresetWeight): FamilySetting {
  const lineHeight = round(interpolateAnchors(family.leading, size), 2)
  if (family.id === "inter") {
    const optical: OpticalSetting = INTER_OPTICAL_PRESETS[size][weight]
    return { ls: optical.ls, lineHeight, opsz: optical.opsz }
  }
  const em = interpolateAnchors(family.tracking, size) + ((weight - 400) / 100) * family.weightSlope
  return { ls: round(em * size, 2), lineHeight }
}

/** Full size × weight table for one family, in the same shape the docs tables render. */
export function familyTable(family: FontFamilyPreset) {
  const weights = familyWeights(family)
  return PRESET_SIZES.map((size) => ({
    size,
    cells: weights.map((weight) => ({ weight, ...familyPreset(family, size, weight) })),
  }))
}

export const familyFontVar = (family: FontFamilyPreset) => `--font-${family.id}`
export const familyUtility = (family: FontFamilyPreset) => `font-${family.id}`
export const familyLsVar = (family: FontFamilyPreset, size: number, weight: PresetWeight) =>
  `--${family.id}-ls-${size}-${weight}`
export const familyLhVar = (family: FontFamilyPreset, size: number) => `--${family.id}-lh-${size}`
export const familyPresetClass = (family: FontFamilyPreset, size: number, weight: PresetWeight) =>
  `${family.id}-opt-${size}-${weight}`

/** Fallback stack emitted into `@theme`; `--face-<id>` is what the site's font loader defines. */
export function familyStack(family: FontFamilyPreset): string {
  const generic =
    family.category === "mono"
      ? "ui-monospace, SFMono-Regular, Menlo, monospace"
      : family.category === "serif"
        ? "ui-serif, Georgia, serif"
        : "system-ui, sans-serif"
  return `var(--face-${family.id}, "${family.label}"), "${family.label}", ${generic}`
}
