export default function catalogFilters() {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (
      target.matches(".js-filters-open") ||
      target.closest(".js-filters-open")
    ) {
      event.preventDefault();
      document.body.classList.add("filters-open");
    }
  });
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (
      target.matches(".js-filters-close") ||
      target.closest(".js-filters-close")
    ) {
      event.preventDefault();
      document.body.classList.remove("filters-open");
    }
  });
}
