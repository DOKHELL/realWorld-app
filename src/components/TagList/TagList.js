import React from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';

const TagList = ({tags, className}) => {
  const tagClasses = cn({
    'tag-default tag-pill': true,
    [className]: className
  });
  return (
    <ul className="tag-list">
      {tags.map((tag, i) => (
        <Link
          to={{
            pathname: '/',
            search: `?tab=tag&tag=${tag}`,
          }}
          className={tagClasses}
          key={i}
        >
          {tag}
        </Link>
      ))}
    </ul>
  );
};

export default TagList;
