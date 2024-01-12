let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
const button1 = document.querySelector('#button1');
let monsterHealth;
let inventory = ["stick"];

const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters.",

    }
    // Step 71
    // Add a third object to the locations array. Give it the same properties as the other two objects.

    // Set name to cave. Set button text to an array with the strings Fight slime, Fight fanged beast, and Go to town square. Set the button functions to an array with the variables fightSlime, fightBeast, and goTown. Set the text property to You enter the cave. You see some monsters..
];

// initialize buttons
button1.onclick = locations["button text"][0];
button2.onclick = locations["button text"][1];
button3.onclick = locations["button text"][2];


function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function fightSlime() { };
function fightBeast() { };
function goCave() {
    console.log("Going to cave.");
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function buyHealth() {

}

function buyWeapon() {

}