import characterData from "./data.js";
import Character from "./Character.js";


let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster(){
    const nextMonsterData = characterData[monstersArray.shift()];

    // The code below is a ternary option that checks if nextMonsterData returns anything. If it does, it creates a new instance of Character using the monstersArray.

    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack(){
    wizard.getDiceHtml();
    orc.getDiceHtml();
    wizard.takeDamage(orc.currentDiceScore);
    orc.takeDamage(wizard.currentDiceScore);
    render();

    if(wizard.dead === true || orc.dead === true){
        endGame();
    }
}

function endGame(){
    const endMessage = wizard.health === 0 && orc.health === 0 ?
    "No victors - all creatures are dead" :
    wizard.health > 0 ?
    "The Wizard Wins" :
    "The Orc is Victorious";


    const endEmoji = wizard.health > 0 ? "🔮" : "☠️";

    document.body.innerHTML = `<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
    </div>`
}

document.getElementById('attack-button').addEventListener('click', attack);

function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
let monster = getNewMonster()

render();

