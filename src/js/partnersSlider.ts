import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function partnersSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-partners-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
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
      centeredSlides: true,
      loop: true,
      speed: 3500,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  });
}
