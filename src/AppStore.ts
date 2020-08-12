import { observable, action } from "mobx";

class AppStore {
  @observable headerTitle: string = "Hello React";

  @action setHeaderTitle(title: string): void {
    this.headerTitle = title;
  }
}

export default new AppStore();
