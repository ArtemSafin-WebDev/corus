import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function teamIntro() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".team-intro")
  );

  elements.forEach((element) => {
    const imageWrapper = element.querySelector<HTMLElement>(
      ".team-intro__image-wrapper"
    );
    const image = element.querySelector<HTMLImageElement>(".team-intro__image");
    const imageBlock = element.querySelector<HTMLElement>(
      ".team-intro__image-block"
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageBlock,
        start: "center center",
        pin: document.querySelector(".team-wrapper"),
        end: () => `center+=${window.innerHeight * 2} center`,
        scrub: true,
        pinSpacing: true,
      },
    });

    tl.fromTo(
      imageWrapper,
      {
        width: "70%",
      },
      {
        width: "100vw",
        duration: 1,
        ease: "none",
      }
    ).to(image, {
      filter: "grayscale(0%)",
      duration: 0.2,
    });
  });
}
