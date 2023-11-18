import Swiper from "swiper";
import "swiper/css";
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
    };

    new Swiper(container, options);
  });
}
