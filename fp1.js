// JavaScript Document

gsap.registerPlugin(ScrollTrigger);

gsap.to(".planet-orbit", {
  rotate: 360,
  ease: "none",
  scrollTrigger: {
    trigger: ".orbit-section",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
