const form = document.querySelector("#MyForm");
const radiusInput = form.querySelector("#radius");
const volumeInput = form.querySelector("#volume");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const radius = Number(radiusInput.value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  volumeInput.value = volume.toFixed(2); 
});
