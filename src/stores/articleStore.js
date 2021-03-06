import {action, observable} from 'mobx';
import {parse} from 'query-string';
import axios from 'axios';
import {API} from '../utils/env';
import commonStore from './commonStore';

const LIMIT = 10;
if (commonStore.token) {
  axios.defaults.headers.post['authorization'] = `Token ${commonStore.token}`;
  axios.defaults.headers.get['authorization'] = `Token ${commonStore.token}`;
}

//интерсептер

class ArticleStore {
  @observable articles = null;
  @observable loading = false;
  @observable totalPageCount = 0;
  @observable totalCount = 0;
  @observable page = 0;
  @observable params = {
    tab: 'all',
    tag: '',
    author: ''
  };


  @action setParams = (search) => {
    // this.params = parse(search);
    const params = {};
    search.forEach((value, key) => {
      params[key] = value;
    });
    this.params = params;
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

    if (this.params.tag) url = `${API}/articles/?limit=${LIMIT}&&offset=${this.page * LIMIT}&&tag=${this.params.tag}`;
    if (this.params.tab === 'feed') url = `${API}/articles/feed?limit=${LIMIT}&&offset=${this.page * LIMIT}`;

    const testUrl = new URL('/articles', API);
    testUrl.searchParams.set('limit', LIMIT);
    if (this.params.tag) testUrl.searchParams.set('tag', this.params.tag);
    console.log(testUrl.href);

    return url;
  };

  @action loadArticles = async () => {
    try {
      this.setLoading(true);
      const response = await axios.get(this.createUrl());
      const {articles, articlesCount} = response.data;
      this.setArticles(articles);
      this.totalCount = articlesCount;
      this.totalPageCount = Math.ceil(articlesCount / LIMIT);
      this.setLoading(false);
    } catch (e) {
      console.log(e.response);
    }
  };

  @action makeFavorite = (article) => {
    article.favorited = true;
    article.favoritesCount += 1;
    try {
      axios.post(`${API}/articles/${article.slug}/favorite`);
    } catch (e) {
      article.favorited = false;
      article.favoritesCount -= 1;
    }
  }
}

const articleStore = new ArticleStore();
export default articleStore;
