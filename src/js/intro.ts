import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Controller, EffectFade } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function intro() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));

  elements.forEach((element) => {
    const bgSliderContainer =
      element.querySelector<HTMLElement>(".intro__bg .swiper");

    console.log("Bg slider", bgSliderContainer);
    if (!bgSliderContainer) return;

    const bgSlider = new Swiper(bgSliderContainer, {
      modules: [Autoplay, Controller, EffectFade],
      slidesPerView: 1,
      speed: 1200,
      effect: "fade",
      fadeEffect: {
        crossFade: false,
      },
      allowTouchMove: false,
    });

    const textSliderContainer = element.querySelector<HTMLElement>(
      ".intro__text-content .swiper"
    );

    if (!textSliderContainer) return;

    const textSlider = new Swiper(textSliderContainer, {
      modules: [Autoplay, Controller, EffectFade],
      slidesPerView: 1,
      speed: 1200,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      autoHeight: true,
    });

    textSlider.controller.control = bgSlider;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const bg = element.querySelector<HTMLDivElement>(
        ".intro__bg-parallax-wrapper"
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: element,
        },
      });

      // tl.to(bg, {
      //   duration: 1,
      //   y: () => element.offsetHeight * 0.3,
      // });
    });
  });
}
