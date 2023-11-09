export default function showAllCheckboxes() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".catalog-content__filters-checkboxes-show-all"
    )
  );

  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.parentElement?.classList.toggle("show-all");
    });
  });
}
