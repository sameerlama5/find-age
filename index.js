const input = document.querySelector("#number");
const button = document.querySelector("#age");
const result = document.querySelector("#result");

function handleSubmit() {
  result.textContent =
    input.value <= 12
      ? "Children"
      : input.value <= 19
      ? "Teen age"
      : input.value <= 40
      ? "Adult"
      : input.value <= 60
      ? "Middle age"
      : "Old age";
}

button.addEventListener("click", handleSubmit);
