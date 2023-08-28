export function validar(input) {
  let errors = {};
  let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let numbersRegex = /\d/;

  // if (!input.email) {
  //   errors.email = "Enter your email";
  // }
  if (!emailRegex.test(input.email)) {
    errors.email = "Invalid email";
  }
  if (input.email.length >= 35) {
    errors.email = "No more than 35 characters please";
  }
  if (!numbersRegex.test(input.password)) {
    errors.password = "Password must contain a number";
  }
  if (input.password.length < 6 || input.password.length > 10) {
    errors.password = "Passwors must be between 6 and 10 characters";
  }

  return errors;
}
