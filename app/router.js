import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("v-scroll-in-element");
  this.route("h-scroll-in-element");
  this.route("v-scroll-window");
  this.route("h-scroll-window");
  this.route('intersection-observer');
});

export default Router;
