const name = document.querySelector("#name");
const grade = document.querySelector("#grade");
const msg = document.querySelector("#message");

document.querySelector("#validate").addEventListener("click", (evt) => {
  let message = null;

  if (grade.validity.valueMissing) {
    message = "Oops, this field is required.";
  } else if (grade.validity.rangeOverflow) {
    message =
      "Wow! That's a really high grade. Please enter a grade between 0 and 10.";
  } else if (grade.validity.rangeUnderflow) {
    message =
      "Yikes! That's a low grade. Please enter a grade between 0 and 10.";
  }

  msg.textContent = message;
  evt.preventDefault();
});
