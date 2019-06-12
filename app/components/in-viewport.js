import Component from "@ember/component";
import InViewportMixin from "ember-in-viewport";
import { set, setProperties } from "@ember/object";

export default Component.extend(InViewportMixin, {
  /*
    Config
    viewportTolerance=(hash top=350 bottom=350 right=350 left=350)

    Mutates state on `inViewport` property.
  */

  classNames: ["in-viewport-c", "w-full", "h-full"],

  hasEntered: false, //does not toggle once true.

  init() {
    this._super(...arguments);

    setProperties(this, {
      viewportEnabled: true,
      viewportUseRAF: true,
      //As its name suggests, if this is true and the IntersectionObserver API is not available in the target browser, the Mixin will use requestAnimationFrame. Unless you want to force enabling or disabling this, you won't need to override this option.
      viewportSpy: true,
      //Default: false. When true, the Mixin will continually watch the Component and re-fire hooks whenever it enters or leaves the viewport. Because this is expensive, this behaviour is opt-in. When false, the Mixin will only watch the Component until it enters the viewport once, and then it sets viewportEntered to true (permanently), and unbinds listeners. This reduces the load on the Ember run loop and your application.
      viewportScrollSensitivity: 1,
      //This value determines the degree of sensitivity (in px) in which a DOM element is considered to have scrolled into the viewport. For example, if you set viewportScrollSensitivity to 10, the didScroll{...} hooks would only fire if the scroll was greater than 10px.
      viewportRefreshRate: 150,
      //If IntersectionObserver and requestAnimationFrame is not present, this value determines how often the Mixin checks your component to determine whether or not it has entered or left the viewport. The lower this number, the more often it checks, and the more load is placed on your application. Generally, you'll want this value between 100 to 300, which is about the range at which people consider things to be "real-time".
      intersectionThreshold: 0,
      //A single number or array of numbers between 0.0 and 1.0. A value of 0.0 means the target will be visible when the first pixel enters the viewport. A value of 1.0 means the entire target must be visible to fire the didEnterViewport hook. Similarily, [0, .25, .5, .75, 1] will fire didEnterViewport every 25% of the target that is visible.
      scrollableArea: this.scrollTargetId ? "#" + this.scrollTargetId : null,
      //Default: Ember Application Div, which we've made scrollabe. See App.css for more details.
      //we have to target the liquid fire outlets.

      //Set dynamically
      viewportTolerance: this.tolerance
        ? this.tolerance
        : {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
    });
  },
  didEnterViewport() {
    this.set("inViewport", true);
    if (this.hasEntered === false) this.set("hasEntered", true);
    console.log("entered the viewport");
  },
  didExitViewport() {
    this.set("inViewport", false);
    console.log("exited the viewport");
  }
});
