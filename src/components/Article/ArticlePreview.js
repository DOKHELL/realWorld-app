import React from 'react';
import {Link} from 'react-router-dom';
import TagList from '../TagList/TagList';
import {useStores} from '../../utils/use-stores';

const ArticlePreview = ({article}) => {
  const {articleStore} = useStores();
  const favoriteHandler = (e) => {
    e.preventDefault();
    if (article.favorited) {
      articleStore.unmakeFavorite(article);
    } else {
      articleStore.makeFavorite(article);
    }
  }
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${article.author.username}`}><img src={article.author.image}/></Link>
        <div className="info">
          <Link to={`/@${article.author.username}`} className="author">{article.author.username}</Link>
          <span className="date">{new Date(article.createdAt).toDateString()}</span>
        </div>
        <button onClick={favoriteHandler} className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"/>{article.favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <TagList className="tag-outline" tags={article.tagList}/>
      </a>
    </div>
  );
};

export default ArticlePreview;
