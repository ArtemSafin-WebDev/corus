import Swiper from "swiper";
import "swiper/css";
import { Mousewheel, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function benefitsSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-benefits-slider")
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
          ".benefits__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".benefits__arrow--next"
        ),
      },
    };

    new Swiper(container, options);
  });
}
