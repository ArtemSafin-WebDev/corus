import Validator from "./classes/Validator";

export default function callbackForm() {
  const forms = Array.from<HTMLFormElement>(
    document.querySelectorAll(".js-callback-form")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    form.validator = formValidator;
  });
}
