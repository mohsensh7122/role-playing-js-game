import characterData from "./data.js";
import Character from "./Character.js";


const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

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
    console.log(endMessage);
}

document.getElementById('attack-button').addEventListener('click', attack);

function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

render();

