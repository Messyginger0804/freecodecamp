
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
// let inventory = ["stick", 'dagger', "sword"];

const button1 = document.querySelector("#button1"); // initialize buttons
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");


/*
 Step 37
button1 represents your first button element. These elements have a special property called onclick, which you can use to determine what happens when someone clicks that button.

You can access properties in JavaScript a couple of different ways. The first is with dot notation. Accessing the onclick property of a button would look like:

button.onclick
Use dot notation to set the onclick property of your button1 to the function reference of goStore. This function will be something you write later. Note that button1 is already declared, so you don't need to use let or const.
*/

const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');


button1.onclick = goStore();