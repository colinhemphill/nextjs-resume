import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import Box from '../Box/Box';
import { tagStyle, TagVariants } from './Tag.css';

interface Tag {
  atoms?: Atoms;
  color: TagVariants['color'];
  size?: TagVariants['size'];
}

const Tag: React.FC<PropsWithChildren<Tag>> = (props) => {
  const { atoms: atomicProperties, children, color, size } = props;

  const classes = composeWithAtoms(atomicProperties, tagStyle({ color, size }));

  return (
    <Box className={classes} backgroundColor={color}>
      {children}
    </Box>
  );
};

export default Tag;
