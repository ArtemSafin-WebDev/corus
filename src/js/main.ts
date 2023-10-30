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
import aboutAnimation from "./aboutAnimation";
import intro from "./intro";
import splitting from "./splitting";
import callbackForm from "./callbackForm";
import modals from "./modals";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  splitting();
  tabs();
  intro();
  innerTabs();
  mediaCenterSlider();
  experienceSlider();
  featuresSlider();
  platformSlider();
  aboutSlider();
  servicesInnerSlider();
  servicesTabsNav();
  menu();
  aboutAnimation();
  partnersSlider();
  callbackForm();
  fixedHeader();
  modals();
  lazyloading();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
