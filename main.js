document.querySelector('#rockButton').addEventListener('click', chooseRock)
document.querySelector('#paperButton').addEventListener('click', choosePaper)
document.querySelector('#scissorButton').addEventListener('click', chooseScissor)

function chooseRock() {
    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice == 0) {
        document.querySelector('#outcomeDisplay').innerHTML = 'Draw'
        document.querySelector('#computerDisplay').innerHTML = 'Rock'
    } else if (computerChoice == 1) {
        document.querySelector('#outcomeDisplay').innerHTML = 'Lose'
        document.querySelector('#computerDisplay').innerHTML = 'Paper'
    } else {
        document.querySelector('#computerDisplay').innerHTML = 'Scissor'
        document.querySelector('#outcomeDisplay').innerHTML = 'Win'
    }


    document.querySelector('#youDisplay').innerHTML = "Rock"
}

function choosePaper() {
    document.querySelector('#youDisplay').innerHTML = "Paper"
}

function chooseScissor() {
    document.querySelector('#youDisplay').innerHTML = "Scissor"
}