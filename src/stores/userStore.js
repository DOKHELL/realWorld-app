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

  @action updatingUser(newUser) {
    return axios.put(`${API}/user`, newUser, {headers: {authorization: `Token ${localStorage.getItem('token')}`}})
      .then((user) => console.log(user));
  }

  @action setUser = (user) => {
    this.currentUser = user;
  };

  @action forgetUser = () => {
    this.currentUser = undefined;
  }
}

const userStore = new UserStore();
export default userStore;
