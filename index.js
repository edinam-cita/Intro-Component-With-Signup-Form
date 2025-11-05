const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstError = document.getElementById("first-error");
const lastError = document.getElementById("last-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const imgFirst = document.getElementById("img-first");
const imgLast = document.getElementById("img-last");
const imgEmail = document.getElementById("img-email");
const imgPassword = document.getElementById("img-password");
const signUpButton = document.getElementById("sign-up");

//console.log(imgPassword);
//console.log(firstValue);
//console.log(email);
//console.log(password);

signUpButton.addEventListener("click", function (e) {
  e.preventDefault();
  errorCheck();
});

function errorCheck() {
  const firstValue = firstName.value.trim();
  const lastValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const firstWrap = firstName.parentElement;
  const lastWrap = lastName.parentElement;
  const emailWrap = email.parentElement;
  const passwordWrap = password.parentElement;

  if (firstValue === "") {
    firstWrap.classList.add("error");
    firstError.style.display = "block";
    imgFirst.style.display = "block";
  } else {
    firstWrap.classList.remove("error");
    firstError.style.display = "none";
    imgFirst.style.display = "none";
  }

  if (lastValue === "") {
    lastWrap.classList.add("error");
    lastError.style.display = "block";
    imgLast.style.display = "block";
  } else {
    lastWrap.classList.remove("error");
    lastError.style.display = "none";
    imgLast.style.display = "none";
  }

  if (emailValue === "") {
    emailWrap.classList.add("error");
    emailError.style.display = "block";
    imgEmail.style.display = "block";
    email.placeholder = "email@example/com";
  } else {
    emailWrap.classList.remove("error");
    emailError.style.display = "none";
    imgEmail.style.display = "none";
  }

  if (passwordValue === "") {
    passwordWrap.classList.add("error");
    passwordError.style.display = "block";
    imgPassword.style.display = "block";
  } else {
    passwordWrap.classList.remove("error");
    passwordError.style.display = "none";
    imgPassword.style.display = "none";
  }
}

// console.log(emailError);
// console.log(imgEmail);
// console.log(email);
console.log(passwordError);
