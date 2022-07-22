const choices = document.querySelectorAll("button")
const plays = ["rock", "paper", "scissors"]
const result = document.createElement("div")
result.classList.add("result")
let playerWins = 0
let computerWins = 0
const score = document.createElement("div")
function playRound() {
    const player = this.getAttribute('data-key')
    const computerchoice = Math.floor(Math.random()*plays.length)
    const computer = plays[computerchoice]
    const container = document.querySelector(".container")
    result.textContent = ""
    if (player===computer) {
        result.textContent = "It's a tie. you both chose "+player+"."
    }
    else if (player===plays[0] & computer===plays[2]) {
        result.textContent = "Congrats, "+player+" beats "+computer+"."
        playerWins++
    }
    else if (player===plays[2] & computer===plays[1]) {
        result.textContent ="Congrats, "+player+" beats "+computer+"."
        playerWins++
    }
    else if (player===plays[1] & computer===plays[0]) {
        result.textContent = "Congrats, "+player+" beats "+computer+"."
        playerWins++
    }
    else {
        result.textContent = "You just lost to a machine. "+computer+" beats "+player+"."
        computerWins++
    }
    if (playerWins==5){
        score.textContent = "You won!"
        playerWins = 0
        computerWins = 0
    }
    else if (computerWins==5) {
        score.textContent = "You lost!"
        playerWins = 0
        computerWins = 0
    }
    else {
    score.textContent = playerWins +" | "+ computerWins
    }
    container.appendChild(result)
    container.appendChild(score)
}
choices.forEach(choice => choice.addEventListener("click",playRound))