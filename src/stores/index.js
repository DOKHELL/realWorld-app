import {configure} from 'mobx';
import authStore from './authStore';
import commonStore from './commonStore';
import articleStore from './articleStore';


configure({
  enforceActions: 'observed'
});

export default {
  authStore,
  commonStore,
  articleStore
};
