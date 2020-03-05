import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import Article from '../../../components/Article/Article';
import {useStores} from '../../../utils/use-stores';
import Loader from '../../../components/Loader/Loader';

const MainContainer = () => {
  const {articleStore} = useStores();
  useEffect(() => {
    articleStore.loadArticles();
  }, []);
  return (
    <>
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a className="nav-link active" href="">Global Feed</a>
          </li>
        </ul>
      </div>
      {
        articleStore.articles && !articleStore.loading
          ? <Article articles={articleStore.articles}/>
          : <Loader className="medium"/>
      }
    </>
  );
};

export default observer(MainContainer);
