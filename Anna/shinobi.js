const secondChallenge = document.querySelector(".second-challenge");
const guessedWord = document.getElementById("unknown-letters");
const secondChallengeInit = () => {
  secondChallenge.innerHTML += `
    <py-title>Hangman</py-title>
      <div id="input-btn-container">
        <input id="letter_input"></input>
        <button id="guess_letter_btn" pys-onClick="on_click_letter">Click</button>
      </div>
      <div id="unknown-letters"></div>
      <div id='key'></div>
      <py-script src="second_challenge.py"></py-script>
    `;
};

secondChallengeInit();
