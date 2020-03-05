import {action, observable} from 'mobx';
import axios from 'axios';
import {API} from '../utils/env';

class ArticleStore {
  @observable articles = null;
  @observable loading = true;

  @action setArticles = (articles) => {
    this.articles = articles;
  };

  @action setLoading = (bool) => {
    this.loading = bool;
  };

  @action loadArticles = async () => {
    try {
      const response = await axios.get(`${API}/articles`);
      this.setArticles(response.data.articles);
      this.setLoading(false);
    } catch (e) {
      console.log(e.response);
    }
  }
}

const articleStore = new ArticleStore();
export default articleStore;
