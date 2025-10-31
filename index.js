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
const error = document.querySelector(".error")

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

  if (firstValue === "") {
    firstError.style.display = "block";
    imgFirst.style.display = "block";
  } else {
    firstError.style.display = "none";
    imgFirst.style.display = "none";
  }

  if (lastValue === "") {
    lastError.style.display = "block";
    imgLast.style.display = "block";
  } else {
    lastError.style.display = "none";
    imgLast.style.display = "none";
  }

  if (emailValue === "") {
    emailError.style.display = "block";
    imgEmail.style.display = "block";
    email.placeholder = "email@example/com";
error.classList.add("error")
  } else {
    emailError.style.display = "none";
    imgEmail.style.display = "none";
    error.classList.remove("error")
  }

  if (passwordValue === "") {
    passwordError.style.display = "block";
    imgPassword.style.display = "block";
  } else {
    passwordError.style.display = "none";
    imgPassword.style.display = "none";
  }
}

// console.log(emailError);
// console.log(imgEmail);
// console.log(email);
// console.log(password);
