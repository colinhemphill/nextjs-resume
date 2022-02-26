import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { displayStyleVariants } from './Display.css';

interface DisplayBase {
  atoms?: Atoms;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

type Display = RequireOnlyOne<
  PropsWithChildren<DisplayBase>,
  'text' | 'children'
>;

const Display: React.FC<Display> = (props) => {
  const { atoms: atomicProperties, children, level, size, text } = props;

  const style = composeWithAtoms(atomicProperties, displayStyleVariants[size]);

  switch (level) {
    case 1:
      return <h1 className={style}>{text || children}</h1>;
    case 2:
      return <h2 className={style}>{text || children}</h2>;
    case 3:
      return <h3 className={style}>{text || children}</h3>;
    case 4:
      return <h4 className={style}>{text || children}</h4>;
    case 5:
      return <h5 className={style}>{text || children}</h5>;
    case 6:
      return <h6 className={style}>{text || children}</h6>;
  }
};

export default Display;
