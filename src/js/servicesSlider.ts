import Swiper from "swiper";
import "swiper/css";
import { EffectFade, Controller, Thumbs, HashNavigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

export default function servicesSlider() {
  const elements = Array.from(document.querySelectorAll(".js-services-slider"));

  elements.forEach((element) => {
    const mainContainer = element.querySelector<HTMLElement>(
      ".services-slider__main-slider .swiper"
    );
    const imageContainer = element.querySelector<HTMLElement>(
      ".services-slider__image-slider .swiper"
    );
    const thumbsContainer = element.querySelector<HTMLElement>(
      ".services-slider__thumbs-slider .swiper"
    );

    if (mainContainer && imageContainer && thumbsContainer) {
      const thumbsInstance = new Swiper(thumbsContainer, {
        slidesPerView: "auto",
        speed: 600,
      });
      const mainInstance = new Swiper(mainContainer, {
        slidesPerView: 1,
        speed: 600,
        modules: [EffectFade, Controller, Thumbs, HashNavigation],
        effect: "fade",
        autoHeight: window.matchMedia("(max-width: 1024px)").matches
          ? true
          : false,
        longSwipesRatio: 0.2,
        hashNavigation: true,

        fadeEffect: {
          crossFade: true,
        },
        init: true,
        thumbs: {
          swiper: thumbsInstance,
        },
      });

      const imageInstance = new Swiper(imageContainer, {
        slidesPerView: 1,
        speed: 600,
        modules: [EffectFade],
        effect: "fade",
        autoHeight: true,
        allowTouchMove: false,
        fadeEffect: {
          crossFade: true,
        },
        init: true,
      });

      mainInstance.controller.control = imageInstance;

      //   mainInstance.init();
      //   imageInstance.init();
    }
  });
}
