import {configure} from 'mobx';
import testStore from './testStore';


configure({
  enforceActions: 'observed'
});

export default {
  testStore,
};
