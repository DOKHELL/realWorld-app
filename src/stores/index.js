import {configure} from 'mobx';
import authStore from './authStore';
import commonStore from './commonStore';
import articleStore from './articleStore';
import userStore from './userStore';


configure({
  enforceActions: 'observed'
});

export default {
  authStore,
  commonStore,
  articleStore,
  userStore
};
