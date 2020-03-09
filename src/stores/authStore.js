import axios from 'axios';
import {action, observable} from 'mobx';
import {API} from '../utils/env';
import commonStore from './commonStore';
import userStore from './userStore';

class AuthStore {
  @observable loader = false;
  @observable errors = null;

  @action setLoading = (bool) => {
    this.loader = bool;
  };

  @action setErrors = (errors) => {
    this.errors = errors;
  };

  fetchLogin(data) {
    const loginData = {
      user: {
        ...data
      }
    };
    this.setLoading(true);
    return axios.post(`${API}/users/login`, loginData)
      .then((res) => commonStore.setToken(res.data.user.token))
      .then(() => userStore.pullUser())
      .catch((e) => {
        this.setErrors(e.response.data.errors);
        this.setLoading(false);
      })
      .finally(() => this.setLoading(false));
  };
  fetchRegister = async (data) => {
    const regData = {
      user: {
        ...data
      }
    };
    try {
      this.setLoading(true);
      const response = await axios.post(`${API}/users`, regData);
      commonStore.setToken(response.data.user.token);
      userStore.pullUser();
      this.setLoading(false);
      return true;
    } catch (e) {
      this.setLoading(false);
      this.setErrors(e.response.data.errors);
      return false;
    }
  };
}

const authStore = new AuthStore();
export default authStore;
