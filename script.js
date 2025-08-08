const result = document.querySelector('.result')
const yourScoreSpan = document.querySelector('.your-score')
const computerScoreSpan = document.querySelector('.computer-score')
const humanChoiceEmoji = document.querySelector('#human-choice-emoji')
const computerChoiceEmoji = document.querySelector('#computer-choice-emoji')

let yourScoreNumber = 0
let computerScoreNumber = 0


const GAME_CHOICES = {
    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'
}

const EMOJI_MAP = {
    [GAME_CHOICES.PEDRA]: '👊',
    [GAME_CHOICES.PAPEL]: '✋',
    [GAME_CHOICES.TESOURA]: '✌️'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playComputer())
}

const playComputer = () => {
    const choices = [GAME_CHOICES.PEDRA, GAME_CHOICES.PAPEL, GAME_CHOICES.TESOURA]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, computer) => {
    console.log('Humano: ' + human + " | Computador: " + computer)

    humanChoiceEmoji.innerHTML = EMOJI_MAP[human]
    computerChoiceEmoji.innerHTML = '🤔' 
    result.innerHTML = 'A máquina está jogando...'

    setTimeout(() => {
        computerChoiceEmoji.innerHTML = EMOJI_MAP[computer]

        if (human === computer) {
            result.innerHTML = 'Deu Empate 😐!'
        } else if ((human === GAME_CHOICES.PAPEL && computer === GAME_CHOICES.PEDRA) ||
            (human === GAME_CHOICES.PEDRA && computer === GAME_CHOICES.TESOURA) ||
            (human === GAME_CHOICES.TESOURA && computer === GAME_CHOICES.PAPEL)) {
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
    }, 900) 
}
