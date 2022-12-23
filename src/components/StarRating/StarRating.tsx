import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface StarRatingProps {
  stars: 1 | 2 | 3;
}

const Star: React.FC<{ className?: string }> = () => {
  return (
    <FontAwesomeIcon
      className="inline h-5 w-5 text-accent-light-11 dark:text-amber-dark-11"
      icon={faStar}
    />
  );
};

export const StarRating: React.FC<StarRatingProps> = (props) => {
  const { stars } = props;

  return (
    <span className="flex items-center">
      {stars >= 1 && <Star />}
      {stars >= 2 && <Star />}
      {stars >= 3 && <Star />}
    </span>
  );
};
