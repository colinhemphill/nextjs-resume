import { style, styleVariants } from '@vanilla-extract/css';
import { atoms } from '../../sprinkles.css';
import { rounded } from '../../styles/borderRadius.css';
import { zIndex0, zIndex3 } from '../../utils/z-index.css';

export const modalDuration = 400;

const overlayBaseStyle = style({
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  height: '100%',
  opacity: 0,
  position: 'fixed',
  transition: `opacity ${modalDuration}ms ease-in-out`,
  top: 0,
  width: '100%',
});

export const overlayStyle = styleVariants({
  entered: [overlayBaseStyle, { opacity: 1 }, zIndex3],
  entering: [overlayBaseStyle, { opacity: 1 }, zIndex3],
  exited: [overlayBaseStyle, { opacity: 0 }, zIndex0],
  exiting: [overlayBaseStyle, { opacity: 0 }, zIndex3],
});

export const closeStyle = style({
  display: 'block',
  margin: '10px 10px 10px auto',
});

const modalBaseStyle = style([
  zIndex3,
  rounded,
  atoms({
    color: {
      darkMode: 'white',
      lightMode: 'black',
    },
    backgroundColor: {
      darkMode: 'dark',
      lightMode: 'white',
    },
  }),
  {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr auto',
    height: '90%',
    left: '10%',
    position: 'fixed',
    transform: 'scale(0.8)',
    transition: `opacity ${modalDuration}ms ease-in-out,
    transform ${modalDuration}ms cubic-bezier(0.3, 2.0, 0.6, 1)`,
    top: '5%',
    width: '80%',
  },
]);

export const modalStyle = styleVariants({
  entered: [modalBaseStyle, { opacity: 1, transform: 'scale(1.0)' }],
  entering: [modalBaseStyle, { opacity: 1, transform: 'scale(1.0)' }],
  exited: [modalBaseStyle, { opacity: 0, transform: 'scale(0.8)' }],
  exiting: [
    modalBaseStyle,
    {
      opacity: 0,
      transform: 'scale(0.8)',
      transition: `all ${modalDuration}ms cubic-bezier(0.25, 1, 0.6, 1)`,
    },
  ],
});

export const modalHeaderStyle = style([
  {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  atoms({
    borderColor: { darkMode: 'black', lightMode: 'light' },
    padding: 2,
  }),
]);
