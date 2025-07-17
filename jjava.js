gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


window.addEventListener("load", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      markers: false
    }
  }).to(".image-container img", {
    scale: 5.5,
    transformOrigin: "center center",
    ease: "power1.inOut"
  });
});


let skewSetter = gsap.quickTo("img", "skewY"), // fast
  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.


ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  effects: true
});


var title = document.querySelector("title");
var titleFontSizePX = getComputedStyle(title).fontSize;
var titleFontSizePXInt = parseInt(titleFontSizePX, 10);

var titleFontSizeVWInt = titleFontSizePXInt * (100 / window.innerWidth);
var titleFontSizeVW = titleFontSizeVWInt + "vw";
title.style.fontSize = titleFontSizeVW;

var lastScroll = 0;

function updateFontSize(event) {
  if (lastScroll != window.scrollY) {
    var titleSizeMax = titleFontSizeVWInt - 0.02 * window.scrollY;
    var titleSizeMin = (titleFontSizeVWInt * 2) / 5;
    title.style.fontSize = Math.max(titleSizeMin, titleSizeMax) + "vw";
  }
  lastScroll = window.scrollY;
}

var events = ["scroll", "touchmove"];
events.forEach((event) => document.addEventListener(event, updateFontSize));




















