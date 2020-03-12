import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../../utils/use-stores';
import HomeBanner from './HomeBanner/HomeBanner';
import MainContainer from './MainContainer/MainContainer';
import SideBar from './SideBar/SideBar';

const Home = () => {
  const {commonStore} = useStores();
  useEffect(() => {
    commonStore.loadTags();
  }, []);
  return (
    <div className="home-page">
      {!commonStore.token && <HomeBanner/>}
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <MainContainer/>
          </div>
          <div className="col-md-3">
            <SideBar/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default observer(Home);