import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function counters() {
  const elements: HTMLElement[] = Array.from(
    document.querySelectorAll(".features__card-title")
  );

  elements.forEach((element) => {
    const content = element.textContent;
    if (!content) return;

    const counter = {
      value: parseInt(content, 10),
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
      },
    });

    tl.from(counter, {
      duration: 4,
      ease: "power2.out",
      value: 0,
      roundProps: "value",
      onUpdate: function () {
        element.textContent = counter.value.toString() + "+";
      },
    });
  });
}
