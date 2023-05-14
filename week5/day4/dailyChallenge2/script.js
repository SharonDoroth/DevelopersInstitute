const input = document.getElementById("lettersOnlyInput");

input.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  // Allow letters and some special keys like backspace, delete, and arrow keys
  if (
    !(
      (key >= "a" && key <= "z") ||
      key === "backspace" ||
      key === "delete" ||
      key === "arrowleft" ||
      key === "arrowright"
    )
  ) {
    event.preventDefault();
  }
});
