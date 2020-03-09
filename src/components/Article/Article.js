import React from 'react';
import Pagination from 'react-js-pagination';
import {observer} from 'mobx-react';
import ArticlePreview from './ArticlePreview';
import {useStores} from '../../utils/use-stores';

const Article = ({articles}) => {
  const {articleStore} = useStores();
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
      <Pagination
        activePage={articleStore.page + 1}
        itemsCountPerPage={10}
        totalItemsCount={articleStore.totalCount}
        itemClass="page-item"
        hideNavigation={true}
        hideFirstLastPages={true}
        linkClass="page-link"
        pageRangeDisplayed={articleStore.totalPageCount}
        onChange={articleStore.setActivePage}
      />
    </>
  );
};

export default observer(Article);