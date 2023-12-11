import Swiper from "swiper";
import "swiper/css";
import { Mousewheel, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function functionalSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-functional-slider")
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
          ".functional__arrow--next"
        ),
        prevEl: element.querySelector<HTMLButtonElement>(
          ".functional__arrow--prev"
        ),
      },
    };

    new Swiper(container, options);
  });
}
