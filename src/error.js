module.exports = getErrors = function(errors) {
  // create hash here instead of an array.
  if (!errors) return undefined;
  let newErrors = { errors: {}};
  if (Array.isArray(errors.errors)) {
    errors.errors.forEach((data) => {
      newErrors.errors[data.property] = data.message;
    });
  } else {
    let error = { [errors.property || errors.developerMessage] : errors["message"] };
    newErrors.errors = error;
  }
  return newErrors;
}