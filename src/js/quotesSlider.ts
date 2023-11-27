import Swiper from "swiper";
import "swiper/css";
import { EffectFade, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function quotes() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".quotes")
  );

  elements.forEach((element) => {
    const authorsContainer = element.querySelector<HTMLElement>(
      ".quotes__authors-slider .swiper"
    );
    const mainContainer = element.querySelector<HTMLElement>(
      ".quotes__text-slider .swiper"
    );

    if (!mainContainer || !authorsContainer) return;

    const mainInstance = new Swiper(mainContainer, {
      modules: [Navigation, Pagination, Controller, EffectFade],
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoHeight: true,
      pagination: {
        el: element.querySelector<HTMLElement>(".quotes__pagination"),
        type: "fraction",
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".quotes__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".quotes__arrow--next"
        ),
      },
    });

    const authorsInstance = new Swiper(authorsContainer, {
      modules: [Controller, EffectFade],
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoHeight: true,
    });

    mainInstance.controller.control = authorsInstance;
    authorsInstance.controller.control = mainInstance;
  });
}
