const secondChallenge = document.querySelector(".second-challenge");
const guessedWord = document.getElementById("unknown-letters");
const secondChallengeInit = () => {
  secondChallenge.innerHTML += `
      <img src="../assets/makimono02.png" alt="challenge 2 instruction"/>
      <div id="input-btn-container">
        <input id="letter_input" placeholder="type in a letter"></input>
        <button id="guess_letter_btn" class='enter-button' pys-onClick="on_click_letter">入力</button>
      </div>
      <div id="unknown-letters"></div>
      <p id='hint' Cherry-blossom='1' Chrysanthemum='2' Paeonia-suffruticosa='3' Camellia='4' Paeonia_suffruticosa='5' Plum_blossom='6'></p>
      <div id='key' sakura='1' kiku='2' botan='3' tsubaki='4' fuji='5' ume='6'></div>
      <py-script src="../python/second_challenge.py"></py-script>
    `;

  // document.getElementById("hint").innerHTML == ""
  //   ? (document.getElementById("modal").style.display = "block")
  //   : (document.getElementById("modal").style.display = "none");

  document.getElementById("key").addEventListener("click", () => {
    window.location.href = "../pages/sakura.html";
  });
};

secondChallengeInit();
