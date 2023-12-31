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
import updateForm from "./updateForm";
import servicesSlider from "./servicesSlider";
import benefitsSlider from "./benefitsSlider";
import controlSlider from "./controlSlider";
import contactsPage from "./contactsPage";
import showAllCheckboxes from "./showAllCheckboxes";
import accordions from "./accordions";
import catalogFilters from "./catalogFilters";
import quotes from "./quotesSlider";
import strongParts from "./strongParts";
import functionalSlider from "./functionalSlider";
import interfaceTabsNav from "./interfaceTabsNav";
import interfaceSlider from "./interfaceSlider";
import weSolveSlider from "./weSolveSlider";
import counters from "./counters";
import teamMembers from "./teamMembers";
import teamBasisSlider from "./teamBasisSlider";
import teamFeatures from "./teamFeatures";
import selects from "./selects";
import teamIntro from "./teamIntro";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  updateForm();
  fixedHeader();
  selects();
  modals();
  lazyloading();
  servicesSlider();
  benefitsSlider();
  controlSlider();
  contactsPage();
  showAllCheckboxes();
  accordions();
  catalogFilters();
  quotes();
  strongParts();
  functionalSlider();
  interfaceTabsNav();
  interfaceSlider();
  weSolveSlider();
  counters();
  teamMembers();
  teamBasisSlider();
  teamFeatures();
  teamIntro();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

let prevWidth = window.innerWidth;
let timer: null | ReturnType<typeof setTimeout> = null;
window.addEventListener("resize", () => {
  if (prevWidth !== window.innerWidth) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);
  }
  prevWidth = window.innerWidth;
});
