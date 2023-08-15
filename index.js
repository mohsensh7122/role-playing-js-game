import characterData from "./data.js";
import Character from "./Character.js";


let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;

function getNewMonster(){
    const nextMonsterData = characterData[monstersArray.shift()];

    // The code below is a ternary option that checks if nextMonsterData returns anything. If it does, it creates a new instance of Character using the monstersArray.

    return nextMonsterData ? new Character(nextMonsterData) : {}

}

function attack(){
    if(!isWaiting){
        wizard.setDiceHtml();
        monster.setDiceHtml();
        wizard.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizard.currentDiceScore);
        render();

    if(wizard.dead){
        endGame()
    }
    else if(monster.dead){
        isWaiting = true;
        if(monstersArray.length > 0){

            // Added a 1.2s delay between one monster dying and the second one appearing on the screen
            setTimeout(() => {
                monster = getNewMonster()
                render()
                isWaiting = false;
            }, 1200)

            
        }
        else{
            endGame()
        }
    }
    }
    
}

function endGame(){
    isWaiting = true;
    const endMessage = wizard.health === 0 && monster.health === 0 ?
    "No victors - all creatures are dead" :
    wizard.health > 0 ?
    "The Wizard Wins" :
    "The Monsters are Victorious";


    const endEmoji = wizard.health > 0 ? "🔮" : "☠️";

    setTimeout(() => {
        document.body.innerHTML = `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
        </div>`
    }, 1200)
    
}

document.getElementById('attack-button').addEventListener('click', attack);

function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
let monster = getNewMonster()

render();

