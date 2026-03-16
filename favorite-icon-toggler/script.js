const icons = document.querySelectorAll(".favorite-icon");

icons.forEach((icon) => {

  icon.addEventListener("click", function () {

    if (icon.classList.contains("filled")) {
      icon.classList.remove("filled");
      icon.innerHTML = "🤍";
    } else {
      icon.classList.add("filled");
      icon.innerHTML = "❤️";
    }
  })
});