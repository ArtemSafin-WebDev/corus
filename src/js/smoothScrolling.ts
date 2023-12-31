import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { isTouch } from "./utils";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function smoothScrolling() {
  let lenis: Lenis | null = null;

  if (!isTouch()) {
    lenis = new Lenis({
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      if (lenis) {
        lenis.raf(time * 1000);
      }
    });

    gsap.ticker.lagSmoothing(0);
  }

  const pageHeader = document.querySelector<HTMLElement>(".page-header");

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.matches(".js-anchor") || target.closest(".js-anchor")) {
      const link = target.matches(".js-anchor")
        ? (target as HTMLAnchorElement)
        : target.closest<HTMLAnchorElement>(".js-anchor");
      if (!link) return;
      event.preventDefault();
      const hash = link.hash;
      if (lenis) {
        lenis.scrollTo(hash, {
          offset: -1 * (pageHeader ? pageHeader.offsetHeight + 20 : 0),
          duration: 1.5,
        });
      } else {
        const element = document.querySelector(hash);
        if (element) {
          gsap.to(window, {
            duration: 1.5,
            ease: "power2.out",
            scrollTo: {
              y: element,
              autoKill: false,
              offsetY: pageHeader ? pageHeader.offsetHeight + 20 : 0,
            },
          });
        }
      }
    }
  });
}
