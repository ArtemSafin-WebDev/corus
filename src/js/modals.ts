export default function modals() {
  const openBtns = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".js-modal-open")
  );

  const closeBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".js-modal-close")
  );

  openBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const hash = btn.hash;
      const modal = document.querySelector<HTMLElement>(`.js-modal${hash}`);
      if (modal) document.body.classList.remove("menu-open");
      modal?.classList.add("active");
      document.body.classList.add("modal-open");
    })
  );

  closeBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const modals = Array.from(
        document.querySelectorAll<HTMLElement>(".js-modal")
      );
      modals.forEach((modal) => modal.classList.remove("active"));
      document.body.classList.remove("modal-open");
    })
  );

  const modals = Array.from(
    document.querySelectorAll<HTMLElement>(".js-modal")
  );

  modals.forEach((modal) =>
    modal.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target === modal) {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
      }
    })
  );

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modals.forEach((modal) => modal.classList.remove("active"));
      document.body.classList.remove("modal-open");
    }
  });
}
