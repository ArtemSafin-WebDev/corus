import "virtual:svg-icons-register";
import "../scss/style.scss";
import mediaCenterSlider from "./mediaCenterSlider";
import partnersSlider from "./partnersSlider";
import experienceSlider from "./experienceSlider";
import featuresSlider from "./featuresSlider";
import platformSlider from "./platformSlider";

document.addEventListener("DOMContentLoaded", () => {
  mediaCenterSlider();
  partnersSlider();
  experienceSlider();
  featuresSlider();
  platformSlider();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
