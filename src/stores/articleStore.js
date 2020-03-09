import {action, observable} from 'mobx';
import {parse} from 'query-string';
import axios from 'axios';
import {API} from '../utils/env';

const LIMIT = 10;

class ArticleStore {
  @observable articles = null;
  @observable loading = false;
  @observable totalPageCount = 0;
  @observable totalCount = 0;
  @observable page = 0;
  @observable params = {
    tab: 'all',
    tag: ''
  };

  @action setParams = (search) => {
    this.params = parse(search);
    this.page = 0;
  };

  @action setActivePage = (page) => {
    this.page = page - 1;
    this.loadArticles();
  };

  @action setArticles = (articles) => {
    this.articles = articles;
  };

  @action setLoading = (bool) => {
    this.loading = bool;
  };

  @action createUrl = () => {
    let url = `${API}/articles?limit=${LIMIT}&&offset=${this.page * LIMIT}`;
    if (this.params.tag) {
      url = `${API}/articles/?limit=${LIMIT}&&offset=${this.page * LIMIT}&&tag=${this.params.tag}`;
    }
    if (this.params.tab === 'feed') {
      url = `${API}/articles/feed?limit=${LIMIT}&&offset=${this.page * LIMIT}`;
    }
    return url;
  };

  @action loadArticles = async () => {
    try {
      this.setLoading(true);
      const response = await axios.get(this.createUrl(), {
        headers: {authorization: `Token ${localStorage.getItem('token')}`}
      });
      const {articles, articlesCount} = response.data;
      this.setArticles(articles);
      this.totalCount = articlesCount;
      this.totalPageCount = Math.ceil(articlesCount / LIMIT);
      this.setLoading(false);
    } catch (e) {
      console.log(e.response);
    }
  }
}

const articleStore = new ArticleStore();
export default articleStore;
