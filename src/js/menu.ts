export default function menu() {
  const burger = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );

  burger?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-open");
  });

  const listItems = Array.from(
    document.querySelectorAll<HTMLElement>(".page-header__nav-list-item")
  );

  const nav = document.querySelector<HTMLElement>(".page-header__nav");

  listItems.forEach((item) => {
    const link = item.querySelector<HTMLLinkElement>(".page-header__nav-link");

    link?.addEventListener("click", (event) => {
      if (!window.matchMedia("(max-width: 1024px)").matches) return;
      event.preventDefault();
      const initiallyActive = item.classList.contains("active");
      listItems.forEach((item) => item.classList.remove("active"));
      if (!initiallyActive) {
        item.classList.add("active");
      }

      const hasActiveItems = listItems.some((item) =>
        item.classList.contains("active")
      );

      if (hasActiveItems) {
        nav?.classList.add("has-active-items");
      } else {
        nav?.classList.remove("has-active-items");
      }
    });
  });
}
