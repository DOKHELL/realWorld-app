import {action, observable} from 'mobx';


class TestStore {
  @observable count = 1;

  @action testAction = () => {
    this.count = this.count+ 1;
  }
}

export default new TestStore();
