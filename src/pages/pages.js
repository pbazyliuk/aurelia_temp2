import { DataRepository } from "../services/dataRepository";
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";

@inject(DataRepository, Router)
export class Pages {
  constructor(dataRepository, router) {
    this.router = router;
    this.dataRepository = dataRepository;
  }

  activate() {
    this.dataRepository.getPages().then(data => {
      this.pages = data;
      if (
        this.pages.length > 0 &&
        this.router.currentInstruction.fragment === "/"
      ) {
        console.log(this.router.currentInstruction.fragment);
        this.router.navigate(`pages/${this.pages[0].pageId}`);
        this.entity = this.pages[0].content;
      } else {
        console.log(this.router.currentInstruction.fragment);
      }
    });
  }
}
