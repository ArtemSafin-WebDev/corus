import Validator from "./classes/Validator";

export default function updateForm() {
  const forms = Array.from(
    document.querySelectorAll<HTMLFormElement>(".js-update-form")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    form.validator = formValidator;
  });
}
