const result = document.querySelector('.result')
const yourScoreSpan = document.querySelector('.your-score')
const computerScoreSpan = document.querySelector('.computer-score')
const humanChoiceEmoji = document.querySelector('#human-choice-emoji')
const computerChoiceEmoji = document.querySelector('#computer-choice-emoji')

const modalOverlay = document.querySelector('#result-modal-overlay')
const modalContent = document.querySelector('.modal-content')
const modalResultText = document.querySelector('#modal-result-text')

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

const showModal = (message) => {
    modalResultText.innerHTML = message
    modalOverlay.style.display = 'flex'
}

const hideModal = () => {
    modalOverlay.style.display = 'none'
}

modalOverlay.addEventListener('click', hideModal)

modalContent.addEventListener('click', (event) => event.stopPropagation())


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
        result.innerHTML = ''
        computerChoiceEmoji.innerHTML = EMOJI_MAP[computer]

        if (human === computer) {
            showModal('Deu Empate 😐!')
        } else if ((human === GAME_CHOICES.PAPEL && computer === GAME_CHOICES.PEDRA) ||
            (human === GAME_CHOICES.PEDRA && computer === GAME_CHOICES.TESOURA) ||
            (human === GAME_CHOICES.TESOURA && computer === GAME_CHOICES.PAPEL)) {
            yourScoreNumber++
            yourScoreSpan.innerHTML = yourScoreNumber
            yourScoreSpan.classList.add('animate-score')
            setTimeout(() => { yourScoreSpan.classList.remove('animate-score') }, 300)
            showModal('Você ganhou 🎉!')
        } else {
            computerScoreNumber++
            computerScoreSpan.innerHTML = computerScoreNumber
            computerScoreSpan.classList.add('animate-score')
            setTimeout(() => { computerScoreSpan.classList.remove('animate-score') }, 300)
            showModal('Você perdeu 😭!')
        }
    }, 1000)
}
