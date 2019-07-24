/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

*/

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|
| Customoizing colors           https://tailwindcss.com/docs/customizing-colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
| By default these colors are automatically shared by the textColor,
| borderColor, and backgroundColor utilities, so this configuration
| would generate classes like .text-navy, .border-gray, and .bg-navy.
|
*/

const colors = {
  black: '#000',
  bronze: {
    default: '#b76a11',
    btnHover: '#985d17', // + 20% slate
    btnDisable: '#ead3b8', // +70% white
  },
  dukeBlue: {
    default: '#075195',
    dark: '#0b4981', // + 20% slate
    light: '#b5cbdf', // +70% white
  },
  graphite: '#425865',
  gray: {
    default: '#e0e0e0',
    light: '#f7f7f7',
  },
  navy: {
    default: '#003266',
    dark: '#06305b', // + 20% slate
    light: '#b3c2d1', // +70% white
  },
  teal: {
    default: '#329999',
    dark: '#2e8384', // + 20% slate
    light: '#c2e1e1', // +70% white
  },
  darkTeal: {
    default: '#268080',
    dark: '#246f70', // + 20% slate
    light: '#bed9d9', // +70% white
  },
  slate: '#1c2931',
  white: '#fff',
};

const spacing = {
  px: '1px',
  0: '0',
  5: '0.3125rem',
  10: '0.625rem',
  15: '0.9375rem',
  20: '1.25rem',
  25: '1.5625rem',
  30: '1.875rem',
  40: '2.5rem',
  50: '3.125rem',
  60: '3.75rem',
  80: '5rem',
  100: '6.25rem',
  120: '7.5rem',
  200: '12.5rem',
};

/*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

const screens = {
  none: 'none',
  xs: '375px',
  sm: '414px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1440px',
  full: '100%',
  screen: '100vw',
};

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    /* Defined above. */
    screens,
    colors,
    spacing,

    /*
    |-----------------------------------------------------------------------------
    | Background colors             https://tailwindcss.com/docs/background-color
    |
    | Customoizing colors         https://tailwindcss.com/docs/customizing-colors
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By default these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    |
    */

    backgroundColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Background Position         https://tailwindcss.com/docs/background-position/
    |-----------------------------------------------------------------------------
    |
    | Here is where you define background positions.
    |
    | Class name: .bg-{position}
    |
    */

    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },

    /*
    |-----------------------------------------------------------------------------
    | Background Size                https://tailwindcss.com/docs/background-size/
    |-----------------------------------------------------------------------------
    |
    | Here is where you define an element's background size.
    |
    | Class name: .bg-{size}
    |
    */

    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },

    /*
    |-----------------------------------------------------------------------------
    | Border colors                     https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    |
    | Take note that border colors require a special "default" value set
    | as well. This is the color that will be used when you do not
    | specify a border color.
    |
    | Class name: .border-{color}
    |
    */

    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.light', 'currentColor'),
    }),

    /*
    |-----------------------------------------------------------------------------
    | Border radius                    https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border radius values. If a `default` radius
    | is provided, it will be made available as the non-suffixed `.rounded`
    | utility.
    |
    | If your scale includes a `0` value to reset already rounded corners, it's
    | a good idea to put it first so other values are able to override it.
    |
    | Class name: .rounded{-side?}{-size?}
    |
    */

    borderRadius: {
      none: '0',
      sm: '0.1875rem', // 3px
      default: '0.3125rem', // 5px
      topImage: '0.1875rem, 0.1875rem, 0, 0',
      full: '9999px',
    },

    /*
    |-----------------------------------------------------------------------------
    | Border widths                     https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border widths. Take note that border
    | widths require a special "default" value set as well. This is the
    | width that will be used when you do not specify a border width.
    |
    | Class name: .border{-side?}{-width?}
    |
    */

    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
    },

    /*
    |-----------------------------------------------------------------------------
    | Shadows                                https://tailwindcss.com/docs/shadows
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the defaults we provide, it's possible to apply multiple shadows
    | per utility using comma separation.
    |
    | If a `default` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    |
    */

    boxShadow: {
      default: '0px 1px 9px rgba(141, 141, 141, 0.35);',
      featureBox: '0px 28px 36px #A2A3A5',
      none: 'none',
    },

    /*
    |-----------------------------------------------------------------------------
    | Conainer                            https://tailwindcss.com/docs/container/
    |-----------------------------------------------------------------------------
    |
    | Tailwind's built-in `container` plugin is enabled by default to
    | give you a Bootstrap-style responsive container component out of the box.
    |
    |
    */

    container: {},

    /*
    |-----------------------------------------------------------------------------
    | Cursor                              https://tailwindcss.com/docs/container/
    |-----------------------------------------------------------------------------
    |
    | Utilities for controlling the cursor style when hovering over an element.
    |
    | Class name: .cursor-{type}
    */

    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG fill                                  https://tailwindcss.com/docs/fill/
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG fill colors. By default we just provide
    | `fill-current` which sets the fill to the current text color. This lets you
    | specify a fill color using existing text color utilities and helps keep the
    | generated CSS file size down.
    |
    | Class name: .fill-{name}
    |
    */

    fill: {
      current: 'currentColor',
    },

    /*
    |-----------------------------------------------------------------------------
    | Flex                                     https://tailwindcss.com/docs/flex/
    |-----------------------------------------------------------------------------
    |
    | Utilities for controlling how flex items both grow and shrink.
    |
    | Class name: .flex-{value}
    |
    */

    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },

    /*
    |-----------------------------------------------------------------------------
    | Flex Grow                            https://tailwindcss.com/docs/flex-grow/
    |-----------------------------------------------------------------------------
    |
    | Utilities for controlling how flex items grow.
    |
    | Class name: .flex-grow-{value}
    |
    */

    flexGrow: {
      0: '0',
      default: '1',
    },
    /*
    |-----------------------------------------------------------------------------
    | Flex Shrink                         https://tailwindcss.com/docs/flex-shrink/
    |-----------------------------------------------------------------------------
    |
    | Utilities for controlling how flex items shrink.
    |
    | Class name: .flex-shrink-{value}
    |
    */

    flexShrink: {
      0: '0',
      default: '1',
    },

    /*
    |-----------------------------------------------------------------------------
    | Font Family                        https://tailwindcss.com/docs/font-family/
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By default we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the default fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    |
    */

    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Spectral', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    /*
    |-----------------------------------------------------------------------------
    | Font sizes                           https://tailwindcss.com/docs/font-size
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your font sizes. Name these in whatever way
    | makes the most sense to you. We use size names by default, but
    | you're welcome to use a numeric scale or even something else
    | entirely.
    |
    | By default Tailwind uses the "rem" unit type for most measurements.
    | This allows you to set a root font size which all other sizes are
    | then based on. That said, you are free to use whatever units you
    | prefer, be it rems, ems, pixels or other.
    |
    | Class name: .text-{size}
    |
    */

    fontSize: {
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      21: '1.3125rem',
      24: '1.5rem',
      28: '1.75rem',
      30: '1.875rem',
      36: '2.25rem',
      48: '3rem',
      56: '3.5rem',
      72: '4.5rem',
      96: '6rem',
    },

    /*
    |-----------------------------------------------------------------------------
    | Font weights                       https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your font weights. We've provided a list of
    | common font weight names with their respective numeric scale values
    | to get you started. It's unlikely that your project will require
    | all of these, so we recommend removing those you don't need.
    |
    | Class name: .font-{weight}
    |
    */

    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600, // Spectral
      bold: 800,
    },

    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your height utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale plus some other
    | common use-cases. You can, of course, modify these values as
    | needed.
    |
    | Class name: .h-{size}
    |
    */

    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),

    /*
    |-----------------------------------------------------------------------------
    | Inset                    https://tailwindcss.com/docs/top-right-bottom-left
    |-----------------------------------------------------------------------------
    |
    | Use the .{top|right|bottom|left|inset}-0 utilities to anchor absolutely
    | positioned elements against any of the edges of the nearest positioned parent.
    |
    | Class name: .inset-{value}
    |
    */

    inset: {
      0: '0',
      auto: 'auto',
    },

    /*
    |-----------------------------------------------------------------------------
    | Letter Spacing (Tracking)        https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your letter spacing values, or as we call
    | them in Tailwind, tracking.
    |
    | Class name: .tracking-{size}
    |
    */

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.08em',
      widest: '0.1em',
    },

    /*
    |-----------------------------------------------------------------------------
    | Line Height (Leading)              https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your line height values, or as we call
    | them in Tailwind, leadings.
    |
    | Class name: .leading-{size}
    |
    */

    // @todo: Return to these values when starting to code designs.
    lineHeight: {
      none: '1',
      normal: '1.428',
      relaxed: '1.536',
      loose: '1.37',
    },

    /*
    |-----------------------------------------------------------------------------
    | List Style Type                 https://tailwindcss.com/docs/list-style-type/
    |-----------------------------------------------------------------------------
    |
    | Utilities for controlling the bullet/number style of a list.
    |
    | Class name: .list-{value}
    |
    */

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },

    /*
    |-----------------------------------------------------------------------------
    | Margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | If you'd like to customize these values for padding, margin, width, and
    | height all at once, see spacing above. Use this seciton to customize values
    | for margin only.
    |
    | Class name: .m{side?}-{size}
    | Sides: l, r, t, b, x (lr), y (tb)
    | All sides: .m-{size}
    | Negative: .-m{side?}-{size}
    |
    */

    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),

    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    |
    */

    maxHeight: {
      full: '100%',
      screen: '100vh',
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum width                        https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based scale and a "full width" size,
    | which is basically a reset utility. You can, of course,
    | modify these values as needed.
    |
    | Class name: .max-w-{size}
    |
    */

    maxWidth: screens,

    /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by default. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    |
    */

    minHeight: {
      0: '0',
      full: '100%',
      screen: '100vh',
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    |
    */

    minWidth: {
      0: '0',
      full: '100%',
    },

    /*
    |-----------------------------------------------------------------------------
    | Object Position                https://tailwindcss.com/docs/object-position/
    |-----------------------------------------------------------------------------
    |
    | Utilities for controlling how a replaced element's content should be 
    | positioned within its container.
    |
    | Class name: .object-{position}
    |
    */

    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },

    /*
    |-----------------------------------------------------------------------------
    | Opacity                                https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your opacity utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .opacity-{value}
    |
    */

    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1',
    },

    /*
    |-----------------------------------------------------------------------------
    | Order                                     https://tailwindcss.com/docs/order
    |-----------------------------------------------------------------------------
    |
    | Utilities for controlling the order of flex items.
    |
    | Class name: .order-{value}
    |
    */

    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },

    /*
    |-----------------------------------------------------------------------------
    | Padding                                https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    |
    | If you'd like to customize these values for padding, margin, width, and
    | height all at once, see spacing above. Use this seciton to customize values
    | for padding only.
    |
    | Class name: .p{side?}-{size}
    | Sides: l, r, t, b, x (lr), y (tb)
    | All sides: .p-{size}
    |
    */

    padding: theme => theme('spacing'),
    stroke: {
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),

    /*
    |-----------------------------------------------------------------------------
    | Z-index                                https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your z-index utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .z-{index}
    |
    */

    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },

  /*
  |-----------------------------------------------------------------------------
  | Configuring Variants      https://tailwindcss.com/docs/configuring-variants/
  |-----------------------------------------------------------------------------
  |
  | The variants section of your tailwind.config.js file is where you control
  | which core utility plugins should have responsive variants and pseudo-class
  | variants generated.
  |
  | (See docs for more information)
  |
  */

  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },

  /*
  |-----------------------------------------------------------------------------
  | Core Plugins        https://tailwindcss.com/docs/configuration/#core-plugins
  |-----------------------------------------------------------------------------
  |
  | The corePlugins section lets you completely disable classes that Tailwind
  | would normally generate by default if you don't need them for your project.
  |
  | If you don't provide any corePlugins configuration, all core plugins will
  | be enabled by default:
  |
  */

  corePlugins: {},

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [],
};
