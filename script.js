const result = document.querySelector('.result')
const yourScoreSpan = document.querySelector('.your-score')
const computerScoreSpan = document.querySelector('.computer-score')

let yourScoreNumber = 0
let computerScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGama(humanChoice, playComputer())

}

const playComputer = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNuber = Math.floor(Math.random() * 3)

    return choices[randomNuber]
}

const playTheGama = (human, computer) => {

    console.log('Humano: ' + human + " | Computador: " + computer)

    if(human === computer){
        result.innerHTML = 'Deu Empate 😐!'

        } else if( (human === 'papel' && computer === 'pedra') ||
        (human === 'pedra' && computer === 'tesoura') ||
        (human === 'tesoura' && computer === 'papel')) {
            yourScoreNumber++
            yourScoreSpan.innerHTML = yourScoreNumber
            yourScoreSpan.classList.add('animate-score')
            setTimeout(() => { yourScoreSpan.classList.remove('animate-score') }, 300)
            result.innerHTML = 'Você ganhou  🎉!' 
        } else {
            computerScoreNumber++
            computerScoreSpan.innerHTML = computerScoreNumber
            computerScoreSpan.classList.add('animate-score')
            setTimeout(() => { computerScoreSpan.classList.remove('animate-score') }, 300)
            result.innerHTML = 'Você perdeu 😭!'
        }

    
}
