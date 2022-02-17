import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './StarRating.module.scss';

interface StarRatingProps {
  stars: 1 | 2 | 3;
}

const StarRating: React.FC<StarRatingProps> = (props) => {
  const { stars } = props;

  return (
    <span className="text-primary">
      {stars >= 3 && <FontAwesomeIcon icon={faStar} />}
      {stars >= 2 && (
        <FontAwesomeIcon className={styles.secondStar} icon={faStar} />
      )}
      {stars >= 1 && (
        <FontAwesomeIcon className={styles.thirdStar} icon={faStar} />
      )}
    </span>
  );
};

export default StarRating;
