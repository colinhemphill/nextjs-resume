import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { tagGroupStyle } from './TagGroup.css';

interface TagGroup {
  atoms?: Atoms;
}

const TagGroup: React.FC<PropsWithChildren<TagGroup>> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, tagGroupStyle);

  return <div className={classes}>{children}</div>;
};

export default TagGroup;
