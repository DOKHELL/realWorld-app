import {action, observable} from 'mobx';
import axios from 'axios';
import {parse} from 'querystring';
import {API} from '../utils/env';

class ArticleStore {
  @observable articles = null;
  @observable loading = false;
  @observable params = {
    tab: 'all',
    tag: ''
  };

  @action setParams = (search) => {
    this.params = parse(search);
  };

  @action setArticles = (articles) => {
    this.articles = articles;
  };

  @action setLoading = (bool) => {
    this.loading = bool;
  };

  @action createUrl = () => {
    let url = `${API}/articles?limit=2`;
    if (this.params.tag) {
      url = `${API}/articles/?tag=${this.params.tag}`;
    }
    return url;
  };

  @action loadArticles = async () => {
    try {
      this.setLoading(true);
      const response = await axios.get(this.createUrl());
      this.setArticles(response.data.articles);
      this.setLoading(false);
    } catch (e) {
      console.log(e.response);
    }
  }
}

const articleStore = new ArticleStore();
export default articleStore;
