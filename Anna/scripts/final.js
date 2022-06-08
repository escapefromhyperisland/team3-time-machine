const final = document.querySelector(".final");

(function finalPageInit() {
  final.innerHTML += `
    <div id='msg-box'></div>
    <video id="webcam" autoplay playsinline width="600" height="auto"></video>
    <canvas id="canvas" class="d-none"></canvas>
    <script src="../scripts/final.js"></script>
    <div class="itsyou-div">
   </div>
    `;
})();

const msgBox = document.getElementById("msg-box");
const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const itsyouDiv = document.querySelector(".itsyou-div");
const webcam = new Webcam(webcamElement, "user", canvasElement);

msgBox.innerHTML += `<p>There is the villain!!!!</p>`;

setTimeout(function () {
  msgBox.innerHTML = `<p>You gotta stop the villain using the time machine again!</p>`;
}, 2000);
setTimeout(function () {
  msgBox.innerHTML = `<p>You: "Hey! Stop!! I'm not letting you slip away!"</p>`;
}, 5000);
setTimeout(function () {
  msgBox.innerHTML = `<p>You reached the villain and the villain turns around...</p>`;
}, 9000);

setTimeout(function () {
  webcam
    .start()
    .then((result) => {
      console.log("webcam started");
    })
    .catch((err) => {
      console.log(err);
    });
}, 11000);

setTimeout(function () {
  itsyouDiv.style.backgroundColor = "#0000009f";
  itsyouDiv.innerHTML = `<p>It's you all along...</p>`;
}, 15000);

setTimeout(function () {
  webcam.stop();
  msgBox.innerHTML = "";
  document.getElementById("final-body-id").classList.remove("final-body");
  document.getElementById("final-body-id").classList.add("final-final-body");
  itsyouDiv.innerHTML = `<p id='ending' style='font-size: 5rem'>But is it the same you?</p>`;
}, 18000);

setTimeout(function () {
  let i = 0;
  const end = "The End";
  document.getElementById("ending").innerHTML = "";
  (function typeWriter() {
    if (i < end.length) {
      document.getElementById("ending").innerHTML += end.charAt(i);
      i++;
      setTimeout(typeWriter, 90);
    }
  })();
}, 20000);
