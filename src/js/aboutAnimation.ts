import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function aboutAnimation() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".about"));
  let mm = gsap.matchMedia();
  elements.forEach((element) => {
    const slider = element.querySelector<HTMLElement>(".about__slider");
    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    const text = element.querySelector<HTMLElement>(".about__slider-text");
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider,
          start: "top top+=120",
          end: () => `top+=${window.innerHeight * 2} top+=120`,
          scrub: true,
          pin: ".pin-wrapper",
          pinSpacing: true,
        },
      });

      slides.forEach((slide, slideIndex) => {
        tl.from(
          slide,
          {
            duration: 1,
            x: () => slide.offsetWidth * slideIndex * -1,
            // autoAlpha: () => 1 - slideIndex * 0.3,
          },
          0
        );
      });

      tl.to(
        text,
        {
          autoAlpha: 0,
          xPercent: 100,
          duration: 1,
        },
        0
      );
    });
  });
}
