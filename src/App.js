import {Component} from 'react'
import RpsContext from './context/RpsContext'

import RockPaperScissors from './components/RockPaperScissors'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isGamePlayed: false,
    randomImgUrl: '',
    result: '',
    choiceImgUrl: '',
  }

  onClickChoice = id => {
    const {score} = this.state
    const randomChoice = choicesList[Math.floor(Math.random() * 3)].id
    const filterRandomImg = choicesList.filter(item => item.id === randomChoice)
    const filterChoice = choicesList.filter(item => item.id === id)
    const result = this.getRandomChoice(id, randomChoice)
    let newScore = score

    if (result === 'YOU WON') {
      newScore = score + 1
      console.log(newScore)
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      randomImgUrl: filterRandomImg[0].imageUrl,
      isGamePlayed: true,
      result,
      choiceImgUrl: filterChoice[0].imageUrl,
    })
  }

  onPlayAgain = () => {
    this.setState({isGamePlayed: false})
  }

  getRandomChoice = (id1, id2) => {
    if (id1 === choicesList[0].id) {
      switch (id2) {
        case choicesList[1].id:
          return 'YOU WON'
        case choicesList[2].id:
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (id1 === choicesList[1].id) {
      switch (id2) {
        case choicesList[0].id:
          return 'YOU LOSE'
        case choicesList[2].id:
          return 'YOU WON'

        default:
          return 'IT IS DRAW'
      }
    } else if (id1 === choicesList[2].id) {
      switch (id2) {
        case choicesList[1].id:
          return 'YOU LOSE'
        case choicesList[0].id:
          return 'YOU WON'

        default:
          return 'IT IS DRAW'
      }
    } else {
      return null
    }
  }

  render() {
    const {score, isGamePlayed, result, randomImgUrl, choiceImgUrl} = this.state
    return (
      <RpsContext.Provider
        value={{
          score,
          isGamePlayed,
          onClickChoice: this.onClickChoice,
          result,
          randomImgUrl,
          choiceImgUrl,
          onPlayAgain: this.onPlayAgain,
        }}
      >
        <RockPaperScissors />
      </RpsContext.Provider>
    )
  }
}

export default App
