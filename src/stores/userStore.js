import {action, observable} from 'mobx';
import axios from 'axios';
import {API} from '../utils/env';

class UserStore {
  @observable currentUser;
  @observable userLoading;

  @action pullUser() {
    this.userLoading = true;
    return axios.get(`${API}/user`, {headers: {authorization: `Token ${localStorage.getItem('token')}`}})
      .then((res) => this.setUser(res.data.user))
      .catch((e) => {
        this.userLoading = false;
      })
      .finally(() => this.userLoading = false);
  }

  @action setUser = (user) => {
    this.currentUser = user;
  }
}

const userStore = new UserStore();
export default userStore;
