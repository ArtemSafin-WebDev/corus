import Swiper from "swiper";

import "swiper/css";
import { Mousewheel, Navigation } from "swiper/modules";

export default function controlSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-control-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Mousewheel, Navigation],
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".control__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".control__arrow--next"
        ),
      },
    });
  });
}
