const textInput = document.getElementById("text-input");
const counterSpan = document.getElementById("charCount");
const charCountParagraph = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let currentLength = textInput.value.length;

  if (currentLength > 50) {
    textInput.value = textInput.value.substring(0, 50);
    currentLength = 50;
  }

  counterSpan.textContent = currentLength;

  charCountParagraph.innerHTML = `Character Count: <span id="charCount">${currentLength}</span>/50`;

  if (currentLength === 50) {
    counterSpan.style.color = "red";
  } else {
    counterSpan.style.color = ""; // скидаємо колір
  }
});