import {action, observable, reaction} from 'mobx';
import axios from 'axios';
import {API} from '../utils/env';

class CommonStore {
  @observable token = window.localStorage.getItem('token');

  @observable tags = [];
  @observable isLoadingTags = true;

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
      }
    );
  }

  @action setToken = (token) => {
    this.token = token;
  };

  @action setLoader = (bool) => {
    this.isLoadingTags = bool;
  };

  @action setTags = (tags) => {
    this.tags = tags;
  };

  @action loadTags = async () => {
    try {
      const response = await axios.get(`${API}/tags`);
      this.setTags(response.data.tags);
      this.setLoader(false);
    } catch (e) {
      console.log(e);
    }
  }
}

const commonStore = new CommonStore();
export default commonStore;
