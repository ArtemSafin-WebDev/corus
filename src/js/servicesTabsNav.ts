import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function servicesTabsNav() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".services__tabs-nav")
  );

  console.log("Elements", elements);

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const checkBounds = (slider: Swiper) => {
      if (slider.progress <= 0) {
        console.log("Slider on start");

        element.classList.add("reach-start");
      } else {
        element.classList.remove("reach-start");
      }
      if (slider.progress >= 1) {
        console.log("Slider on end");

        element.classList.add("reach-end");
      } else {
        element.classList.remove("reach-end");
      }
    };

    let instance = new Swiper(container, {
      modules: [Navigation],
      speed: 500,
      slidesPerView: "auto",
      init: false,
      slideToClickedSlide: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".services__tabs-nav-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".services__tabs-nav-arrow--next"
        ),
      },
      on: {
        init(swiper) {
          checkBounds(swiper);
        },
        progress(swiper) {
          console.log("Progress", swiper.progress);
          checkBounds(swiper);
        },
      },
    });

    instance.init();

    window.addEventListener("load", () => {
      instance.update();
    });
  });
}
