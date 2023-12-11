import Swiper from "swiper";
import "swiper/css";
import { Mousewheel, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function strongParts() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-strong-parts-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
      modules: [Mousewheel, Navigation],
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: element.querySelector<HTMLButtonElement>(
          ".strong-parts__arrow--next"
        ),
        prevEl: element.querySelector<HTMLButtonElement>(
          ".strong-parts__arrow--prev"
        ),
      },
    };

    new Swiper(container, options);
  });
}
