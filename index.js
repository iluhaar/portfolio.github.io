const checkbox = document.querySelector(".checkbox");
const vanta = document.querySelector("#vanta");

window.addEventListener("DOMContentLoaded", () => {
  VANTA.GLOBE({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });
});

checkbox.addEventListener("click", (e) => {
  const state = e.target.checked;
  if (state) {
    vanta.classList.add("hidden");
  } else if (!state) {
    vanta.classList.remove("hidden");
  }
});

function cb(response) {
  document.getElementById("visits").innerText = response.value;
}
