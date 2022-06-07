const final = document.querySelector(".final");

(function finalPageInit() {
  final.innerHTML += `
    <video id="webcam" autoplay playsinline width="600" height="auto"></video>
    <canvas id="canvas" class="d-none"></canvas>
    <script src="../scripts/final.js"></script>
    <div class="overlay">
   </div>
    `;
})();

const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webcamElement, "user", canvasElement);
setTimeout(function () {
  webcam
    .start()
    .then((result) => {
      console.log("webcam started");
    })
    .catch((err) => {
      console.log(err);
    });

  document.querySelector(
    ".overlay"
  ).innerHTML += `<p>It's you all along...</p><p>but is it the same you?</p>`;
}, 5000);
