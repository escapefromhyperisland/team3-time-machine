const background = new Audio("./assets/384713__ramonmineiro__mad-scientist-lab-loopable.mp3")
const solutionMusic = new Audio("./assets/215983__bushi3593__creaking-of-door-from-outside.wav")
const doorShadowEscapingCreak = new Audio("./assets/split.wav")
solutionMusic.volume = 0.3;
doorShadowEscapingCreak.volume = 0.3;
background.volume = 0.2;
background.loop = true;
let musicIsPlaying = true;


function handleMusic () {
  const musicIcon = document.querySelector("#music-icon")
    musicIsPlaying? background.pause() : background.play();
  musicIsPlaying? musicIcon.className = "fas fa-volume-mute fa-xs" : musicIcon.className = "fas fa-volume-down fa-xs";
    musicIsPlaying = !musicIsPlaying;
}

function closePopup() {
  document.querySelector("#popup").style.visibility = "hidden";
  document.querySelector("#travel-video").play()
  document.querySelector("#background-black").style.visibility = "hidden";

  setTimeout(()=>{
    background.play()
    document.querySelector("#timetravel").style.visibility = "hidden";
    document.querySelector("#music-button").style.visibility = "visible";
    document.querySelector("#info-button").style.visibility = "visible";
    document.querySelector("#shadowLeave").emit("scaleShadowAnim", null, false);
    document.querySelector("#shadowLeave").emit("positionXShadowAnim", null, false);
    document.querySelector("#shadowLeave").emit("positionYShadowAnim", null, false);
    document.querySelector("#workshop-door").emit("rotateDoorAnim", null, false);
    document.querySelector("#workshop-door").emit("positionDoorAnim", null, false);
    setTimeout(()=>{
      doorShadowEscapingCreak.play()
    }, 2000)
    setTimeout(()=>{
      document.querySelector("#shadowLeave").setAttribute("visible", false)
    }, 3000);
  }, 7000)  
}

function togglePopup() {
  document.querySelector("#popup-info").classList.toggle("hidden");
}

const nextLevel = () => {
  window.parent.postMessage('nextLevel');
}

const solutionIsCorrect = [false, false, false]

const changePassword = (password, el) => {
  let newPassword = "";
  let indexNow = password.findIndex((x)=>(x === el.getAttribute('text').value ));
  if (indexNow === -1 || indexNow === (password.length -1)){
    newPassword = password[0]
  }else {
    newPassword = password[indexNow+1]
  }
  el.setAttribute("value", newPassword)
  changeSolution(password, newPassword)
}

const changeSolution = (password, newPassword) => {
  if(password[0] === "ART"){
    newPassword === "TECHNOLOGY" ? solutionIsCorrect[0] = true : solutionIsCorrect[0] = false
  } else if(password[0] === "IS"){
    newPassword === "MEANS" ? solutionIsCorrect[1] = true : solutionIsCorrect[1] = false
  } else{
    newPassword === "EVERYTHING" ? solutionIsCorrect[2] = true : solutionIsCorrect[2] = false
  }
  setTimeout(()=>{
    checkSolution()
  }, 3000)
}
let interval = 0;

const checkSolution = () => {
  if(solutionIsCorrect[0] && solutionIsCorrect[1] && solutionIsCorrect[2]){
    interval = setInterval(fade, 2200);
    solutionMusic.play()
    document.querySelector("#wrapper-finish").classList.remove("hidden");
    document.querySelector("#finish").classList.add("scaleup");
  }
}

function fade() {
  background.volume = background.volume - 0.05;
  if(background.volume <= 0){
    clearInterval(interval);
    background.pause();
    background.volume = .2;
  }
}

AFRAME.registerComponent("change-text-on-mouseclick", {

  update: function () {
    const password = ["ART", "TECHNOLOGY", "PHILOSOPHY", "GEOGRAPHY", "PLAYFULNESS", "WITCHERY"]
    var el = this.el;
    el.addEventListener('click', function (){changePassword(password, el)})
  }
});

AFRAME.registerComponent("change-text1-on-mouseclick", {

  update: function () {
    const password = ["IS", "CAN", "DOES", "SAYS", "MEANS", "LETS"]
    var el = this.el;
    el.addEventListener('click', function (){changePassword(password, el)})
  }
});

AFRAME.registerComponent("change-text2-on-mouseclick", {

  update: function () {
    const password = ["NOTHING", "MOONSHINE", "SOMETHING", "THE WORLD", "EVERYTHING", "SUNSHINE"]
    let el = this.el;
    el.addEventListener('click', function (){changePassword(password, el)})
  }
});

AFRAME.registerComponent("text-visible-on-hover", {
  schema: {
    visible: {default: "true"}
  },

  init: function () {
    let data = this.data;
    let el = this.el;
    const defaultVisibility = el.object3D.children[0].visible

    el.addEventListener('mouseenter', function () {
      el.object3D.children[0].visible = data.visible
    });

    el.addEventListener('mouseleave', function () {
      el.object3D.children[0].visible = defaultVisibility;
    });
  }
});

AFRAME.registerComponent("scale-down-on-mouseclick", {
  schema: {
    to: {default: {x: 0.5, y: 0.5, z: 0.5}, type: "vec3"}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener("click", function () {
      el.object3D.scale.copy(data.to);
    });
  }
});

AFRAME.registerComponent("scale-up-on-mouseclick", {
  schema: {
    to: {default: {x: 3, y: 3, z: 3}, type: "vec3"},
    radius: {default: 4, type: "int"},
    positiony: {default: .3, type: "number"}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener("click", function () {
      el.object3D.scale.copy(data.to);
      el.object3D.position.y = data.positiony;
    });
  }
});



AFRAME.registerComponent("text-on-hover", {
  
  init: function () {
    let el = this.el;
  
    el.addEventListener('mouseenter', function () {
      el.setAttribute("text", {value: "You need the sung and unwritten word to answer this question: What can be (the word)?", align: "center", anchor: "align", baseline: "bottom", width: 2})
    });
    el.addEventListener('mouseleave', function () {
      el.removeAttribute("text")
    });
  }
});