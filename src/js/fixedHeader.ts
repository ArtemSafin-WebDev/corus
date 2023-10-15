import { debounce } from "lodash";

export default function fixedHeader() {
  const pageHeader = document.querySelector<HTMLElement>(".page-header");

  if (!pageHeader) return;
  const checkHeader = () => {
    if (window.scrollY > 20) {
      pageHeader.classList.add("page-header--fixed");
    } else {
      pageHeader.classList.remove("page-header--fixed");
    }
  };

  checkHeader();
  window.addEventListener("scroll", () => {
    checkHeader();
  });

  window.addEventListener("resize", debounce(checkHeader, 300));
}
