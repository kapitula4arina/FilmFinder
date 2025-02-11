import { useState } from 'react';
import css from './MovieReviewsItem.module.css';

const MovieReviewsItem = ({
  review: {
    author,
    content,
    author_details: { rating },
  },
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div>
      <h4 className={css.author}>{author}</h4>
      <p className={css.text}>Rating: {rating}</p>
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
