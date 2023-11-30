import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

export default function controlSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-control-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      modules: [Scrollbar],
      slidesPerView: "auto",
      speed: 600,

      scrollbar: {
        el: element.querySelector<HTMLElement>(".scrollbar"),
        draggable: true,
      },
    });
  });
}
