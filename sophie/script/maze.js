//svg mazes
const levelTwo = document.querySelector(".level-two");
//UI MESSAGES
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
//End Game
// const spookyPicture = document.getElementById("spooky-picture");
//const screamSound = document.querySelector(".scream-sound");

const collisionCheck = (value) => {
  if (value === "maze-border") {
    alert("You lost...try again.");
    //screamSound.play();
  }
  // if (value === "finish") {
  //   nextButton.style.opacity = 1;
  //   nextButton.style.pointerEvents = "all";
  //   levelOne.style.pointerEvents = "none";
  // }
  if (value === "end-game") {
    alert("this is working");
    window.parent.postMessage("nextLevel");
    // screamSound.play();

    // spookyPicture.play();
    // spookyPicture.style.display = "block";
    // document.body.style.background = "black";
  }
};

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  //console.log(e.target.classList.value);
  collisionCheck(check);
});
