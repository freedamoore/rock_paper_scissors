const weapons = document.querySelectorAll(".weapon");

weapons.forEach(weapon => weapon.addEventListener('click', (weapon) => {
  const currentWeapon = weapon.target;
  console.log(currentWeapon.dataset.weapon);
}));
