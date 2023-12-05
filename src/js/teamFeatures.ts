import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function teamFeatures() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".team-features")
  );

  elements.forEach((element) => {
    const slider = element.querySelector<HTMLElement>(".team-features__slider");
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".team-features__card")
    );
    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      cards.forEach((card, cardIndex) => {
        const amount = card.querySelector<HTMLElement>(
          ".team-features__card-amount"
        );
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slider,
            start: "center bottom",
            end: "bottom top",
            markers: false,
            pinnedContainer: ".team-wrapper",
          },
        });

        const content = amount?.textContent;
        if (!content) return;

        const counter = {
          value: parseInt(content, 10),
        };

        tl.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 60,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            delay: cardIndex * 0.2,
            ease: "power2.out",
          }
        );

        tl.from(
          counter,
          {
            duration: 4,
            ease: "power2.out",
            value: 0,
            roundProps: "value",
            onUpdate: function () {
              amount.textContent = counter.value.toString() + "+";
            },
          },
          0
        );
      });
    });
  });
}
