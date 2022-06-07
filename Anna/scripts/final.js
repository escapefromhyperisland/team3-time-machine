const final = document.querySelector(".final");

(function finalPageInit() {
  final.innerHTML += `
    <video id="webcam" autoplay playsinline width="1000" height="auto"></video>
    <canvas id="canvas" class="d-none"></canvas>
    <script src="../scripts/final.js"></script>
    <div class="overlay">
   </div>
    `;
})();

const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webcamElement, "user", canvasElement);
webcam
  .start()
  .then((result) => {
    console.log("webcam started");
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(function () {
  document.querySelector(
    ".overlay"
  ).innerHTML += `<p>YOU ARE THE VILLAIN!!!</p>`;
}, 5000);
