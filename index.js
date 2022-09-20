import composeInputValidations from "./validate.js";

class ValidateForms {
  constructor() {
    this.forms = document.querySelector("form");
    this.name = this.forms.name;
    this.lastName = this.forms.lastName;
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    const nameHasError = composeInputValidations(this.name.value)({
      hasMinLength: 4,
      hasMaxLength: 10,
    });
    const lastNameHasError = composeInputValidations(this.lastName.value)({
      hasMinLength: 4,
      hasMaxLength: 10,
    });

    if (nameHasError) {
      this.name.previousElementSibling.innerText = nameHasError;
      this.name.previousElementSibling.style.color = "red";
    }
    if (lastNameHasError) {
      this.name.previousElementSibling.innerText = lastNameHasError;
      this.lastName.previousElementSibling.style.color = "red";
    }
  };

  normalizeErrors = (event) => {
    this.name.previousElementSibling.innerText = "Nome";
    this.name.previousElementSibling.style.color = "black";
    this.lastName.previousElementSibling.innerText = "Sobrenome";
    this.lastName.previousElementSibling.style.color = "black";
  }

  addListenerOnSubmitAndFocus() {
    this.forms.addEventListener("click", this.handleSubmitForm);
  }

  init() {
    this.addListenerOnSubmitAndFocus();
  }
}

new ValidateForms().init();
