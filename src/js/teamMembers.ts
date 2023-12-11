import Swiper from "swiper";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function teamMembers() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-team-members-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
      modules: [Mousewheel],
      mousewheel: {
        forceToAxis: true,
      },
    };

    new Swiper(container, options);
  });
}
