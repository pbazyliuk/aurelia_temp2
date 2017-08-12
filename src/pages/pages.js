import { DataRepository } from "../services/dataRepository";
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(DataRepository, Router, EventAggregator)
export class Pages {
  constructor(dataRepository, router, eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.router = router;
    this.dataRepository = dataRepository;
    this.pages = [];
  }

  activate() {
    this.eventAggregator.subscribe("new-message", data => {
      console.log(data);
    });

    //   if (
    //     this.pages.length > 0 &&
    //     this.router.currentInstruction.fragment === "/"
    //   ) {
    //     console.log(this.router.currentInstruction.fragment);
    //     this.router.navigate(`pages/${this.pages[0].pageId}`);
    //     this.entity = this.pages[0].content;
    //   } else {
    //     console.log(this.router.currentInstruction.fragment);
    //   }
  }
}
