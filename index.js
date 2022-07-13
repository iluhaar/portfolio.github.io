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

function cb(response) {
    document.getElementById('visits').innerText = response.value;
}
