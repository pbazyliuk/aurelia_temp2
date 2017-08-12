import { RouterConfiguration, Router } from "aurelia-router";
import { DataRepository } from "services/dataRepository";
import { inject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(DataRepository, EventAggregator)
export class App {
  constructor(dataRepository, eventAggregator) {
    this.dataRepository = dataRepository;
    this.eventAggregator = eventAggregator;
  }

  activate() {
    this.dataRepository.getPages().then(data => {
      this.pages = data;
      console.log(this.pages);

      this.eventAggregator.publish("new-message", this.pages);
    });
  }
  configureRouter(config, router) {
    config.options.pushState = true;
    this.router = router;
    config.map([
      { route: ["", "/pages/:id"], name: "pages", moduleId: "pages/pages" }
    ]);
  }
}
