function verificarEmail(email) {
  const emailField = document.getElementById("email");
  const errorImage = document.getElementById("error-image");
  const label = document.getElementById("label");
  const errorText = document.getElementById("error-text");

  const user = email.value.substring(0, email.value.indexOf("@"));
  const domain = email.value.substring(
    email.value.indexOf("@") + 1,
    email.value.length
  );

  if (
    email.value.length > 1 &&
    user.length > 1 &&
    domain.length &&
    1 &&
    email.value.search(" ") == -1 &&
    user.search("@") == -1 &&
    domain.search("@") == -1 &&
    domain.search(".") != -1 &&
    domain.indexOf(".") >= 1 &&
    domain.lastIndexOf(".") < domain.length - 1
  ) {
    errorImage.hidden = true;
    errorText.hidden = true;
    label.style.border = "";
    return true;
  } else {
    errorImage.hidden = false;
    errorText.hidden = false;
    label.style.border = "2px solid var(--soft-red)";
    return false;
  }
}
