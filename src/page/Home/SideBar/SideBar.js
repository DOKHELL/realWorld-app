import React from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../../../utils/use-stores';
import TagList from '../../../components/TagList/TagList';
import Loader from '../../../components/Loader/Loader';

const SideBar = () => {
  const {commonStore} = useStores();
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      {commonStore.tags && !commonStore.isLoadingTags
        ? <TagList tags={commonStore.tags}/>
        : <Loader className="small"/>}
    </div>
  );
};

export default observer(SideBar);
