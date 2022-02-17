import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface StarRatingProps {
  stars: 1 | 2 | 3;
}

const StarRating: React.FC<StarRatingProps> = (props) => {
  const { stars } = props;

  return (
    <span className="text-primary">
      {stars >= 3 && <FontAwesomeIcon icon={faStar} />}
      {stars >= 2 && <FontAwesomeIcon icon={faStar} />}
      {stars >= 1 && <FontAwesomeIcon icon={faStar} />}
    </span>
  );
};

export default StarRating;
