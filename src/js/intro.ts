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

    const writeText = (swiper: Swiper) => {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const heading = activeSlide.querySelector<HTMLElement>(".intro__heading");
      if (!heading) return;
      const headingChars = Array.from(
        heading.querySelectorAll<HTMLElement>(".char")
      );

      const tl = gsap.timeline();
      tl.fromTo(
        headingChars,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.14,
          stagger: 0.08,
        }
      );

      const headingText = activeSlide.querySelector<HTMLElement>(
        ".intro__heading-text"
      );
      if (!headingText) return;

      const headingTextChars = Array.from(
        headingText.querySelectorAll<HTMLElement>(".char")
      );
      tl.fromTo(
        headingTextChars,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.02,
          stagger: 0.02,
        }
      );
    };

    const textSlider = new Swiper(textSliderContainer, {
      modules: [Autoplay, Controller, EffectFade],
      slidesPerView: 1,
      speed: 500,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      init: false,
      on: {
        init: (swiper) => {
          writeText(swiper);
        },
        // slideChange: (swiper) => {
        //   writeText(swiper);
        // },
      },
    });

    textSlider.init();

    textSlider.controller.control = bgSlider;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      element.querySelector<HTMLDivElement>(".intro__bg-parallax-wrapper");

      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: element,
        },
      });
    });
  });
}
