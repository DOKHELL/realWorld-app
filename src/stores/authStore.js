import axios from 'axios';
import {action, observable} from 'mobx';
import {API} from '../utils/env';
import commonStore from './commonStore';

class AuthStore {
  @observable loader = false;
  @observable errors = null;

  @action setLoading = (bool) => {
    this.loader = bool;
  };

  @action setErrors = (errors) => {
    this.errors = errors;
  };
  // fetchAuth = async (data) => {
  //   const Data = {
  //     user: {
  //       ...data
  //     }
  //   };
  //   try {
  //     this.setLoading(true);
  //     const response = await axios.post(`${API}/users/login`, Data);
  //     commonStore.setToken(response.data.user.token);
  //     this.setLoading(false);
  //     return true;
  //   } catch (e) {
  //     this.setLoading(false);
  //     this.setErrors(e.response.data.errors);
  //     return false;
  //   }
  // };
  fetchLogin = async (data) => {
    const loginData = {
      user: {
        ...data
      }
    };
    try {
      this.setLoading(true);
      const response = await axios.post(`${API}/users/login`, loginData);
      commonStore.setToken(response.data.user.token);
      this.setLoading(false);
      return true;
    } catch (e) {
      this.setLoading(false);
      this.setErrors(e.response.data.errors);
      return false;
    }
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
      this.setLoading(false);
      return true;
    } catch (e) {
      this.setLoading(false);
      this.setErrors(e.response.data.errors);
      return false;
    }
  }
}

const authStore = new AuthStore();
export default authStore;
