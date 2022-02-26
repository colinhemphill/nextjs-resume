import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import colors from '../../strum-design-system/themes/timbre/colors';

interface StarRatingProps {
  stars: 1 | 2 | 3;
}

const Star: React.FC<{ className?: string }> = ({ className }) => {
  return <FontAwesomeIcon color={colors.yellow} icon={faStar} size="sm" />;
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
