import React from 'react';
import ArticlePreview from './ArticlePreview';

const Article = ({articles}) => {
  return (
    <>
      {articles.map((article, i) => (
        <ArticlePreview
          key={i}
          article={article}/>
      ))}
    </>
  );
};

export default Article;