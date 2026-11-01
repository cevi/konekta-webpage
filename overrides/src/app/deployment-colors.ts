/** A colour, or a palette of colours by shade, as in the `colors` of `tailwind.config.ts`. */
export type DeploymentColor = string | Record<string, string>;

/**
 * konekta's colours, copied over conveniat27's `src/app/deployment-colors.ts` before the build.
 * `tailwind.config.ts` overlays them on conveniat27's colours: a colour left out here keeps
 * conveniat27's value, and a palette keeps the shades it does not name.
 *
 * The neutral tones of the app's design language (`line`, `heading`, `rail`, `tint`, `chip`,
 * `quiet`) are conveniat27's with their hue turned from its green to konekta's blue, keeping
 * their lightness and saturation.
 */
export const deploymentColors: Record<string, DeploymentColor> = {
  green: {
    50: '#E8ECF3',
    100: '#D1D9E7',
    200: '#A3B3D0',
    300: '#8CA0C4',
    400: '#5D7AAC',
    500: '#2F5495',
    600: '#184189',
    700: '#13346E',
    800: '#112E60',
    900: '#0C2145',
    950: '#071329',
  },

  'conveniat-green': '#184189',

  blue: {
    50: '#E8ECF3',
    100: '#D1D9E7',
    200: '#A3B3D0',
    300: '#8CA0C4',
    400: '#5D7AAC',
    500: '#2F5495',
    600: '#184189',
    700: '#13346E',
    800: '#112E60',
    900: '#0C2145',
    950: '#071329',
  },

  'cevi-blue': '#184189',

  line: '#E1E3E6',
  heading: '#2F333B',
  rail: { DEFAULT: '#D5D8DB', dash: '#C3C7CB', node: '#8F949A' },
  tint: { DEFAULT: '#EEF1F3', line: '#D3D8DD' },
  chip: '#E0E3E6',
  quiet: '#EEF0F1',
};
