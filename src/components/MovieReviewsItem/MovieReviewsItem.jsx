import { useState } from 'react';
import css from './MovieReviewsItem.module.css';
import { FaStar } from 'react-icons/fa';

const MovieReviewsItem = ({
  review: {
    author,
    content,
    author_details: { rating },
  },
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 300;

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className={css.card}>
      <div className={css.header}>
        <h4 className={css.author}>{author}</h4>
        {rating !== null && (
          <p className={css.rating}>
            <FaStar className={css.starIcon} />
            {rating}
          </p>
        )}
      </div>
      <p className={css.text}>
        {isExpanded || content.length <= maxLength
          ? content
          : `${content.substring(0, maxLength)}... `}
        {content.length > maxLength && (
          <button onClick={toggleExpand} className={css.reviewMore}>
            {isExpanded ? 'Less' : 'More'}
          </button>
        )}
      </p>
    </div>
  );
};

export default MovieReviewsItem;
