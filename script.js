const weapons = document.querySelectorAll(".weapon");
const score = document.getElementById("score-label");
const playAgain = document.querySelector(".play-again-btn");
let totalScore = 0;

const generateHouseWeapon = () => {
  const weaponChoice = ['paper', 'scissors', 'rock'];
  const randomWeapon = Math.floor(Math.random() * 3);
  return weaponChoice[randomWeapon];
}

const getWinner = (humanWeapon, computerWeapon) => {
  let outcome;

  if (humanWeapon === computerWeapon){
    outcome = 0;
  }else if ((humanWeapon == "paper" && computerWeapon == "rock") ||
            (humanWeapon == "rock" && computerWeapon == "scissors") ||
            (humanWeapon == "scissors" && computerWeapon == "paper")){
    outcome = 1;
  }else{
    outcome = -1;
  }

  totalScore += outcome;


  console.log("Player weapon: " + humanWeapon);
  console.log("Computer weapon: " + computerWeapon);
  console.log("Total Outcome: " + outcome);
  console.log("Total Score: " + totalScore);

  score.textContent = String(totalScore);
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
