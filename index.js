const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceRoll: 6
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceRoll: 4
}


function renderCharacter(data){
        document.getElementById(`${data.elementId}`).innerHTML = `<div class="character-card">
        <h4 class="name"> ${data.name} </h4>
        <img class="avatar" src="${data.avatar}"/>
        <p class="health">health: <b> ${data.health} </b></p>
        <div class="dice-container"><div class="dice"> ${data.diceRoll} </div></div>
    </div>`
}

renderCharacter(hero);
renderCharacter(monster);

// document.getElementById('hero').innerHTML = `
//     <div class="character-card">
//         <h4 class="name"> Wizard </h4>
//         <img class="avatar" src="images/wizard.png"/>
//         <p class="health">health: <b> 60 </b></p>
//         <div class="dice-container"><div class="dice"> 6 </div></div>
//     </div>   
// `

// document.getElementById('monster').innerHTML = `<div class="character-card">
//                     <h4 class="name"> Orc </h4>
//                     <img class="avatar" src="images/orc.png"/>
//                     <p class="health">health: <b> 10 </b></p>
//                     <div class="dice-container"><div class="dice"> 4 </div></div>
//                 </div>`;