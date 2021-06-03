


// Team one counter

// Team one shot counter
let teamoneshotButton = document.querySelector("#teamone-shoot")
let teamoneshotCounter = document.querySelector("#teamone-numshots")

// Team one goal counter
let teamoneHitCounter = document.querySelector("#teamone-numhits")

// Function for shot counter ("".addEventListener")  *14-26 is all about the Shot button for Team one*
teamoneshotButton.addEventListener("click", function () {

    // Statment for shot counter
    teamoneshotCounter.innerHTML = parseInt(teamoneshotCounter.innerHTML) + 1;

    //  created random number variable for the goal counter
    let randomnumber = Math.random()
    console.log(randomnumber)
    // Statement for goal counter
    if (randomnumber < .5) {
        teamoneHitCounter.innerHTML = parseInt(teamoneHitCounter.innerHTML) + 1;
    }
})

// Team two counter

// Team two shot counter
let teamtwoshotButton = document.querySelector("#teamtwo-shoot")
let teamtwoshotCounter = document.querySelector("#teamtwo-numshots")

// Team two goal counter
let teamtwoHitCounter = document.querySelector("#teamtwo-numhits")

// Function for shot counter ("".addEventListener")  
teamtwoshotButton.addEventListener("click", function () {

    // Statment for shot counter
    teamtwoshotCounter.innerHTML = parseInt(teamtwoshotCounter.innerHTML) + 1;

    //  created random number variable for the goal counter
    let randomnumber = Math.random()
    console.log(randomnumber)
    // Statement for goal counter
    if (randomnumber < .5) {
        teamtwoHitCounter.innerHTML = parseInt(teamtwoHitCounter.innerHTML) + 1;
    }
})


// Reset button


let resetButton = document.querySelector("#reset")
//  Reset counter
let resetCounter = document.querySelector("#num-resets")

// Function for reset button

resetButton.addEventListener("click", function () {

    resetCounter.innerHTML = parseInt(resetCounter.innerHTML) + 1
    teamoneshotCounter.innerHTML = (teamoneshotCounter.innerHTML) = 0;
    teamoneHitCounter.innerHTML = (teamoneHitCounter.innerHTML) = 0;
    teamtwoshotCounter.innerHTML = (teamtwoshotCounter.innerHTML) =0 ;
    teamtwoHitCounter.innerHTML = (teamtwoHitCounter.innerHTML) = 0;

})




