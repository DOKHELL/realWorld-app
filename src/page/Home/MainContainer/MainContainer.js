import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {useLocation} from 'react-router-dom';
import Article from '../../../components/Article/Article';
import {useStores} from '../../../utils/use-stores';
import Loader from '../../../components/Loader/Loader';
import GlobalTab from '../../../components/TabsFilter/GlobalTab';
import TagTab from '../../../components/TabsFilter/TagTab';
import YourTab from '../../../components/TabsFilter/YourTab';

const MainContainer = () => {
  const {articleStore, userStore} = useStores();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (location.search) {
      articleStore.setParams(params);
    }
    articleStore.loadArticles();
  }, [location.search]);

  return (
    <>
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {userStore.currentUser && <YourTab/>}
          <GlobalTab/>
          <TagTab tag={articleStore.params.tag}/>
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
