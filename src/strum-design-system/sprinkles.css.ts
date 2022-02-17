import {
  createMapValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import {
  circleBorderRadius,
  roundedBorderRadius,
} from './styles/borderRadius.css';
import { darkScheme, lightScheme } from './themes/colorScheme.css';
import { vars } from './themes/contract.css';
import { breakpointMediaQueries } from './utils/breakpointMediaQueries';

const responsiveProperties = defineProperties({
  conditions: {
    xs: { '@media': breakpointMediaQueries.xs },
    sm: { '@media': breakpointMediaQueries.sm },
    md: { '@media': breakpointMediaQueries.md },
    lg: { '@media': breakpointMediaQueries.lg },
    xl: { '@media': breakpointMediaQueries.xl },
    xxl: { '@media': breakpointMediaQueries.xxl },
  },
  defaultCondition: 'xs',
  properties: {
    borderRadius: {
      0: 0,
      circle: circleBorderRadius,
      rounded: roundedBorderRadius,
    },
    display: ['none', 'block', 'flex'],
    height: ['100%'],
    margin: vars.spacers,
    marginBottom: vars.spacers,
    marginLeft: vars.spacers,
    marginRight: vars.spacers,
    marginTop: vars.spacers,
    padding: vars.spacers,
    paddingBottom: vars.spacers,
    paddingLeft: vars.spacers,
    paddingRight: vars.spacers,
    paddingTop: vars.spacers,
    textAlign: ['left', 'center', 'right'],
  },
  responsiveArray: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    darkMode: {
      '@media': '(prefers-color-scheme: dark)',
      selector: `html:not(${lightScheme}) &`,
    },
    hover: { selector: '&:hover' },
    lightMode: {
      '@media': '(prefers-color-scheme: light)',
      selector: `html:not(${darkScheme}) &`,
    },
  },
  defaultCondition: ['lightMode', 'darkMode'],
  properties: {
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    color: vars.colors,
    fill: vars.colors,
    stroke: vars.colors,
  },
});

export const atoms = createSprinkles(responsiveProperties, colorProperties);

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export type Atoms = Parameters<typeof atoms>[0];
