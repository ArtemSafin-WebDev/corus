import Validator from "./classes/Validator";
import axios from "axios";

export default function callbackForm() {
  const forms = Array.from<HTMLFormElement>(
    document.querySelectorAll(".js-callback-form")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    const controller = new AbortController();

    const success = form
      .closest<HTMLElement>(".js-modal")
      ?.querySelector<HTMLElement>(".callback-modal__success");
    const error = form
      .closest<HTMLElement>(".js-modal")
      ?.querySelector<HTMLElement>(".callback-modal__error");

    const handleFormSubmit = (event: SubmitEvent) => {
      event.preventDefault();

      if (!formValidator || !form) return;

      formValidator.validate();

      if (formValidator.valid) {
        const formData = new FormData(form);

        axios
          .post(form.action, formData, {
            signal: controller.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);
            success?.classList.add("active");
            setTimeout(() => {
              success?.classList.remove("active");
            }, 5000);
            if (form) {
              form.reset();
            }
          })
          .catch((err) => {
            console.error(err);
            error?.classList.add("active");
            setTimeout(() => {
              error?.classList.remove("active");
            }, 5000);
          });
      }
    };
    form.addEventListener("submit", handleFormSubmit);
  });
}
