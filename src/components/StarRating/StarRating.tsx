import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tokens } from '@strum/react';
import React from 'react';

interface StarRatingProps {
  stars: 1 | 2 | 3;
}

const Star: React.FC<{ className?: string }> = () => {
  return (
    <FontAwesomeIcon
      color={tokens.accent.yellow.dark.accent9}
      icon={faStar}
      size="sm"
    />
  );
};

const StarRating: React.FC<StarRatingProps> = (props) => {
  const { stars } = props;

  return (
    <span>
      {stars >= 1 && <Star />}
      {stars >= 2 && <Star />}
      {stars >= 3 && <Star />}
    </span>
  );
};

export default StarRating;
