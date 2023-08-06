function getDiceRollArray(diceCount){
    let diceRollArray = [];

    for (let i = 0; i < diceCount; i++){
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        diceRollArray.push(randomNumber);
    }

    return diceRollArray;
}

function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(dice){
        return `<div class="dice">${dice}</div>`;
    }).join('');
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
    this.elementId = data.elementId;
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;

    this.getCharacterHtml = function(){
        const { elementId, name, avatar, health, diceCount } = this;

        const diceHtml = getDiceHtml(diceCount);


        document.getElementById(`${data.elementId}`).innerHTML = `<div class="character-card">
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

wizard.getCharacterHtml();
orc.getCharacterHtml();
