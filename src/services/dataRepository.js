import { pagesData } from "mock/pagesData";

export class DataRepository {
  getPages() {
    var promise = new Promise((resolve, reject) => {
      if (!this.pages) {
        this.pages = pagesData;

        resolve(this.pages);
      }
      resolve(this.pages);
    });
    return promise;
  }

  getPage(id) {
    return this.pages.find(item => item.pageId == id);
  }
}
