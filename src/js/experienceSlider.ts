import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function experienceSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-experience-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      modules: [Autoplay],
      slidesPerView: "auto",
      speed: 800,
      autoplay: {
        delay: 3000,
      },
    });
  });
}
