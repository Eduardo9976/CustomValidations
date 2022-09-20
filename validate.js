const hasMinLength = (payload, minLength = 1) => {
  return payload.length < minLength
    ? `O campo deve ter no mínino ${minLength} caracteres`
    : false;
};

const hasMaxLength = (payload, maxLength = 1) => {
  return payload.length > maxLength
    ? `O campo deve ter no máximo ${maxLength} caracteres`
    : false;
};

const validations = { hasMinLength, hasMaxLength };

function composeInputValidations(payload) {
  let hasError = false;
  return (checklist) => {
    const validationsRequired = Object.keys(checklist);
    for (let i = 0, j = validationsRequired.length; i < j; i++) {
      if (hasError) {
        break;
      }
      hasError = validations[validationsRequired[i]](
        payload,
        checklist[validationsRequired[i]]
      );
    }
    return hasError;
  };
}

export default composeInputValidations;
