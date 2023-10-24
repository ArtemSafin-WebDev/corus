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

    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    const wrapper = element.querySelector<HTMLElement>(".swiper-wrapper");

    if (!container || !wrapper) return;

    for (let i = 0; i < 3; i++) {
      slides.forEach((slide) => {
        wrapper.appendChild(slide.cloneNode(true));
      });
    }

    new Swiper(container, {
      modules: [Autoplay],
      slidesPerView: "auto",
      speed: 800,
      autoplay: {
        delay: 3000,
      },
      loop: true,
    });
  });
}
