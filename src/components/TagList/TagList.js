import React from 'react';
import cn from 'classnames';

const TagList = ({tags, className}) => {
  const tagClasses = cn({
    'tag-default tag-pill': true,
    [className]: className
  });
  return (
    <ul className="tag-list">
      {tags.map((tag, i) => (
        <li className={tagClasses} key={i}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
