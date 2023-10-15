import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

export default function aboutSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-about-slider")
  );

  const mql = window.matchMedia("(max-width: 1024px)");

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
    };

    let instance: Swiper | null = null;

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        if (instance) instance.destroy();
        instance = new Swiper(container, options);
      } else {
        if (instance) instance.destroy();
        instance = null;
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
