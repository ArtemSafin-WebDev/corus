import "virtual:svg-icons-register";
import "../scss/style.scss";
import mediaCenterSlider from "./mediaCenterSlider";
import partnersSlider from "./partnersSlider";
import experienceSlider from "./experienceSlider";
import featuresSlider from "./featuresSlider";
import platformSlider from "./platformSlider";
import aboutSlider from "./aboutSlider";
import servicesInnerSlider from "./servicesInnerSlider";
import servicesTabsNav from "./servicesTabsNav";
import tabs from "./tabs";
import innerTabs from "./innerTabs";
import lazyloading from "./lazyloading";
import smoothScrolling from "./smoothScrolling";
import fixedHeader from "./fixedHeader";
import menu from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  fixedHeader();
  tabs();
  innerTabs();
  mediaCenterSlider();
  partnersSlider();
  experienceSlider();
  featuresSlider();
  platformSlider();
  aboutSlider();
  servicesInnerSlider();
  servicesTabsNav();
  lazyloading();
  menu();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
