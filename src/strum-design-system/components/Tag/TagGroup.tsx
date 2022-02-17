import React from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { tagGroupStyle } from './TagGroup.css';

interface TagGroup {
  atoms?: Atoms;
}

const TagGroup: React.FC<TagGroup> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, tagGroupStyle);

  return <div className={classes}>{children}</div>;
};

export default TagGroup;
