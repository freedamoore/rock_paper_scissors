const weapons = document.querySelectorAll(".weapon");
const score = document.getElementById("score-label");
const outcomeLabel = document.getElementById("outcome-label");
const playAgain = document.querySelector(".play-again-btn");
let totalScore = 0;

const generateHouseWeapon = () => {
  const weaponChoice = ['paper', 'scissors', 'rock'];
  const randomWeapon = Math.floor(Math.random() * 3);
  return weaponChoice[randomWeapon];
}

const getWinner = (humanWeapon, computerWeapon) => {
  let outcome;
  let winner;
  if (humanWeapon === computerWeapon){
    outcome = 0;
    winner = "It's a draw!";
  }else if ((humanWeapon == "paper" && computerWeapon == "rock") ||
            (humanWeapon == "rock" && computerWeapon == "scissors") ||
            (humanWeapon == "scissors" && computerWeapon == "paper")){
    outcome = 1;
    winner = "You win!";
  }else{
    outcome = -1;
    winner = "House wins!";
  }
  totalScore += outcome;
  console.log("Player weapon: " + humanWeapon);
  console.log("Computer weapon: " + computerWeapon);
  console.log("Total Outcome: " + outcome);
  console.log("Total Score: " + totalScore);
  console.log("Winner: " + winner);
  score.textContent = String(totalScore);
  outcomeLabel.textContent = winner;

  document.getElementById("human-img").src = "images/icon-"+humanWeapon+".svg";
  document.getElementById("house-img").src = "images/icon-"+computerWeapon+".svg";
}

const toggleVisibility = (showOutcome) => {
  if(showOutcome){
    document.querySelector(".weapon-selection").style.visibility = "hidden";
    document.querySelector(".round-outcome").style.visibility = "visible";
  }else{
    document.querySelector(".weapon-selection").style.visibility = "visible";
    document.querySelector(".round-outcome").style.visibility = "hidden";
  }
}

weapons.forEach(weapon => weapon.addEventListener('click', (weapon) => {
  const currentWeapon = weapon.target.dataset.weapon;
  const computerWeapon = generateHouseWeapon();
  getWinner(currentWeapon, computerWeapon);
  toggleVisibility(true);
}));

playAgain.addEventListener('click', () => {
  toggleVisibility(false);
});
