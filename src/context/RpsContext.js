import React from 'react'

const RpsContext = React.createContext({
  score: 0,
  isGamePlayed: false,
  onClickChoice: () => {},
  result: '',
  randomImgUr: '',
  choiceImgUrl: '',
  onPlayAgain: () => {},
})
export default RpsContext
