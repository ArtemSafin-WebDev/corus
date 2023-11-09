export default function catalogFilters() {
  const openBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".js-filters-open")
  );
  const closeBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".js-filters-close")
  );

  openBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.add("filters-open");
    })
  );

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.remove("filters-open");
    });
  });
}
