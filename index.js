function getDiceRollArray(diceCount){
    let diceRollArray = [];

    for (let i = 0; i < diceCount; i++){
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        diceRollArray.push(randomNumber);
    }

    return diceRollArray;
}


const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}


function Character(data){
   
    Object.assign(this, data);

    this.getDiceHtml = function(diceCount){
        return getDiceRollArray(diceCount).map(function(dice){
            return `<div class="dice">${dice}</div>`;
        }).join('');
    }

    this.getCharacterHtml = function(){
        const { elementId, name, avatar, health, diceCount } = this;

        const diceHtml = this.getDiceHtml(diceCount);


        return `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`
    }

}


const wizard = new Character(hero);
const orc = new Character(monster);

document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
