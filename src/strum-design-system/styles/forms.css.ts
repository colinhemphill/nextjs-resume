import { style } from '@vanilla-extract/css';
import { atoms } from '../sprinkles.css';
import { vars } from '../themes/contract.css';
import { rounded } from './borderRadius.css';

export const formInput = style([
  rounded,
  {
    backgroundColor: vars.colors.white,
    borderStyle: 'solid',
    borderWidth: '1px',
    color: vars.colors.black,
    display: 'block',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    padding: `${vars.spacers[2]} ${vars.spacers[3]}`,
    width: '100%',
  },
  {
    selectors: {
      '&:focus': {
        boxShadow: `0 0 0 0.15rem ${vars.colors.primary}`,
        outline: 0,
      },
    },
  },
  atoms({
    borderColor: { lightMode: 'light' },
  }),
]);

export const formInputError = atoms({
  color: 'red',
  marginTop: 2,
});
