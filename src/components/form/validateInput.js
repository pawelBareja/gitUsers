export const validateInput = (value, type, callback) => {
  callback(false);

  let minCharacters = true,
    validEmail = true,
    correct = false;

  if (type === "E-mail") {
    if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      validEmail = false;
      callback("Email is incorrect");
    }
  }

  if (value.length < 3) {
    minCharacters = false;
    callback("Mimimum 3 characters required");
  }

  if (minCharacters && validEmail) {
    correct = true;
  }

  console.log(minCharacters + " " + validEmail);
  return correct;
};
