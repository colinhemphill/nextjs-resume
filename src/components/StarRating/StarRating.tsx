import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface StarRatingProps {
  stars: 1 | 2 | 3;
}

const Star: React.FC<{ className?: string }> = () => {
  return (
    <StarIcon className="h-5 fill-accent-11 text-accent-11 dark:fill-amber-11 dark:text-amber-11" />
  );
};

export const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
  return (
    <span className="flex items-center">
      {stars >= 1 && <Star />}
      {stars >= 2 && <Star />}
      {stars >= 3 && <Star />}
    </span>
  );
};
