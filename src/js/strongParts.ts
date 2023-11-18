import Swiper from "swiper";
import "swiper/css";
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
    };

    new Swiper(container, options);
  });
}
