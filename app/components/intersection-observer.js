import Component from "@ember/component";

export default Component.extend({
  classNames: ["intersection-observer", "w-full", "h-full"],
  isInViewport: false, //custom to track state and pass down to components

  hasEntered: false, //does not toggle once true.

  number: null, //index number of element display onscreen

  didInsertElement() {
    this._super(...arguments);

    //https://webkit.org/blog/8582/intersectionobserver-in-webkit/

    var scrollableContainer = document.querySelector("#scrollableContainer");

    var observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.background = "green";
            console.log("is inviewport", this.number);
            this.set("viewportEntered", true);
          } else {
            entry.target.style.background = "red";
            this.set("viewportEntered", false);
            console.log("is outside viewport", this.number);
          }
        });
      },
      {
        root: scrollableContainer,
        threshold: [0, 0.5, 1],
        rootMargin: "500px"
      }
    );

    observer.observe(this.element);
  }
});
