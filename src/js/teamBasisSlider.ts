import Swiper from "swiper";
import "swiper/css";
import { Mousewheel, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function teamBasisSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-team-basis-slider")
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
        prevEl: element.querySelector<HTMLButtonElement>(
          ".team-basis__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".team-basis__arrow--next"
        ),
      },
    };

    new Swiper(container, options);
  });
}
