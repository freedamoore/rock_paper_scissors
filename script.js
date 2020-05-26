const weapons = document.querySelectorAll(".weapon");

const generateHouseWeapon = () => {
  const weaponChoice = ['paper', 'scissors', 'rock'];
  const randomWeapon = Math.floor(Math.random() * 3);
  return weaponChoice[randomWeapon];
}

weapons.forEach(weapon => weapon.addEventListener('click', (weapon) => {
  const currentWeapon = weapon.target.dataset.weapon;
  const computerWeapon = generateHouseWeapon();
  console.log("Player weapon: " + currentWeapon);
  console.log("Computer weapon: " + computerWeapon);
}));
