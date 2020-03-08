import React from 'react';
import ArticlePreview from './ArticlePreview';

const Article = ({articles}) => {
  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }
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