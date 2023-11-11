import Swiper from "swiper";
import "swiper/css";
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
    };

    new Swiper(container, options);
  });
}
