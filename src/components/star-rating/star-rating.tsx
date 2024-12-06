import { StarIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

interface StarRatingProperties {
  stars: 1 | 2 | 3;
}

function Star(): ReactNode {
  return (
    <StarIcon className="h-5 fill-accent-11 text-accent-11 dark:fill-amber-11 dark:text-amber-11" />
  );
}

export default function StarRating({ stars }: StarRatingProperties): ReactNode {
  return (
    <span className="flex items-center">
      {stars >= 1 && <Star />}
      {stars >= 2 && <Star />}
      {stars >= 3 && <Star />}
    </span>
  );
}
