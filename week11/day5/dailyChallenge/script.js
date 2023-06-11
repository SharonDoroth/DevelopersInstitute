function appendData(data) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = data.message;
}

document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("/register", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    appendData(data);
  });

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const response = await fetch("/login", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  appendData(data);
});
