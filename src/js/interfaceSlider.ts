import Swiper from "swiper";
import "swiper/css";
import { EffectFade, Pagination, Navigation, Mousewheel } from "swiper/modules";

export default function interfaceSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-interface-slider")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [EffectFade, Pagination, Navigation, Mousewheel],
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".interface__inner-slider-pagination"
        ),
        type: "fraction",
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".interface__inner-slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".interface__inner-slider-arrow--next"
        ),
      },
    });
  });
}
