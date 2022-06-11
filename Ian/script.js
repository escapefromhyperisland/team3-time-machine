const introVideo = document.getElementById("warp-overlay");

const removeStartAnimation = () => {
    setTimeout(function () {
      
      document.getElementById("timetravel-video").remove();
      document.getElementById("warp-overlay").remove();
    }, 6000);
}

removeStartAnimation();

// const shake = () => {
//     setTimeout(function () {
//       document.getElementsByClassName("body");
//     }, 4000);
// }

// shake();