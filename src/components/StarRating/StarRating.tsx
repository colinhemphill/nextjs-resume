import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import colors from '../../strum-design-system/themes/timbre/colors';
import { star2, star3 } from './StarRating.css';

interface StarRatingProps {
  stars: 1 | 2 | 3;
}

const StarRating: React.FC<StarRatingProps> = (props) => {
  const { stars } = props;

  return (
    <span>
      {stars >= 3 && <FontAwesomeIcon color={colors.primary} icon={faStar} />}
      {stars >= 2 && (
        <FontAwesomeIcon
          className={star2}
          color={colors.primary}
          icon={faStar}
        />
      )}
      {stars >= 1 && (
        <FontAwesomeIcon
          className={star3}
          color={colors.primary}
          icon={faStar}
        />
      )}
    </span>
  );
};

export default StarRating;
