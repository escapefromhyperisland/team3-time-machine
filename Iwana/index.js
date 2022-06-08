const background = new Audio("./assets/384713__ramonmineiro__mad-scientist-lab-loopable.mp3")
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
  }, 7000)
}

function togglePopup() {
  document.querySelector("#popup-info").classList.toggle("hidden");
}

const solutionIsCorrect = [false, false, false]

const changePassword = (password, el) => {
  let newPassword = "";
  let indexNow = password.findIndex((x)=>(x === el.getAttribute('text').value ));
  console.log("INDEXNOW FIRST: ", indexNow)
  if (indexNow === -1 || indexNow === (password.length -1)){
    newPassword = password[0]
    console.log("NEW PASSWORD 0", newPassword )
  }else {
    newPassword = password[indexNow+1]
    console.log("INDEXNOW +1", indexNow+1)
    console.log("NEW PASSWORD", newPassword )
  }
  el.setAttribute("value", newPassword)
  changeSolution(password, newPassword)
}

const changeSolution = (password, newPassword) => {
  if(password[0] === "ART"){
    newPassword === "TECHNOLOGY" ? solutionIsCorrect[0] = true : solutionIsCorrect[0] = false
    console.log("SOLUTION CORRECT OR NOT: ",solutionIsCorrect[0])
  } else if(password[0] === "IS"){
    newPassword === "MEANS" ? solutionIsCorrect[1] = true : solutionIsCorrect[1] = false
  } else{
    newPassword === "EVERYTHING" ? solutionIsCorrect[2] = true : solutionIsCorrect[2] = false
  }
  setTimeout(()=>{
    checkSolution()
  }, 1000)
}

const checkSolution = () => {
  if(solutionIsCorrect[0] && solutionIsCorrect[1] && solutionIsCorrect[2]){
    console.log()
    window.parent.postMessage('nextLevel');
    document.querySelector("#wrapper-finish").classList.remove("hidden");
    // document.querySelector("#finish").style.visibility = "visible";
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
    to: {default: "0.5 0.5 0.5", type: "vec3"}
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
    to: {default: "3 3 3", type: "vec3"},
    radius: {type: "int", default: 4},
    positiony: {default: .3, type: "number"}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener("click", function () {
      el.object3D.scale.copy(data.to);
      el.object3D.position.y = data.positiony;
     // perhaps with mouseenter, -leave?
    // take away the changes when leaving??
    });
  }
});