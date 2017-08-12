import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  configureRouter(config, router) {
    config.options.pushState = true;
    this.router = router;
    console.log(this.router);
    config.title = "Aurelia";
    config.map([
      { route: ["", "/pages/:id"], name: "pages", moduleId: "pages/pages" }
    ]);
  }
}
