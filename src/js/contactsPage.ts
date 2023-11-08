import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function contactsPage() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".contacts-page")
  );

  elements.forEach((element) => {
    const btns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(".contacts-page__cities-btn")
    );
    const mapItems = Array.from(
      element.querySelectorAll<HTMLElement>(".contacts-page__maps-item")
    );
    const infoItems = Array.from(
      element.querySelectorAll<HTMLElement>(".contacts-page__info-item")
    );

    const btnIndicator = element.querySelector<HTMLElement>(
      ".contacts-page__cities-btn-indicator"
    );

    const infoItemsWrapper = element.querySelector<HTMLElement>(
      ".contacts-page__info"
    );

    if (!infoItemsWrapper) return;

    const setActiveTab = (index: number) => {
      const state = Flip.getState([btnIndicator, infoItemsWrapper]);
      btns.forEach((btn) => btn.classList.remove("active"));
      mapItems.forEach((item) => item.classList.remove("active"));
      infoItems.forEach((item) => item.classList.remove("active"));
      btns[index]?.classList.add("active");
      mapItems[index]?.classList.add("active");
      infoItems[index]?.classList.add("active");
      if (btnIndicator) {
        btns[index]?.appendChild(btnIndicator);
      }
      Flip.from(state, {
        ease: "power1.inOut",
        duration: 0.2,
      });
    };

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveTab(btnIndex);
      });
    });
  });
}
