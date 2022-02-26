import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { headingStyleVariants } from './Heading.css';

interface HeadingBase {
  atoms?: Atoms;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

type Heading = RequireOnlyOne<
  PropsWithChildren<HeadingBase>,
  'text' | 'children'
>;

const Heading: React.FC<Heading> = (props) => {
  const { atoms: atomicProperties, children, level, text } = props;

  const style = composeWithAtoms(atomicProperties, headingStyleVariants[level]);

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

export default Heading;
