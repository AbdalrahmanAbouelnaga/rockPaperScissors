const plays = ["Rock", "Paper", "scissors"];
function computerplays() {
    for (i=0 ; i<=14; i++) {
    let player = parseInt(prompt("Choose either 1.Rock 2.Paper or 3.Scissors"),10)-1
    let playerChoice = plays[(player)]
     let computerChoiceNum = Math.floor(Math.random()*plays.length)
    let computerChoice = plays[computerChoiceNum]
    if (player===computerChoiceNum) {
        console.log("It's a tie. you both chose "+playerChoice+".")
    }
    else if (player===0 & computerChoiceNum===2) {
        console.log("Congrats, "+playerChoice+" beats "+computerChoice+".")
    }
    else if (player===2 & computerChoiceNum===1) {
        console.log("Congrats, "+playerChoice+" beats "+computerChoice+".")
    }
    else if (player===1 & computerChoiceNum===0) {
        console.log("Congrats, "+playerChoice+" beats "+computerChoice+".")
    }
    else {
        console.log("You just lost to a machine. "+computerChoice+" beats "+playerChoice+".")
    }
}
}
computerplays()