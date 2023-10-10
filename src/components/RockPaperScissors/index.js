import {MainContainer} from './StyledComponent'
import RpsContext from '../../context/RpsContext'
import ScoreCard from '../ScoreCard'
import GameView from '../GameView'
import ResultView from '../ResultView'
import RulesPopUp from '../RulesPopUp'

const RockPaperScissors = () => (
  <RpsContext.Consumer>
    {value => {
      const {isGamePlayed} = value
      return (
        <MainContainer>
          <ScoreCard />
          {isGamePlayed ? <ResultView /> : <GameView />}

          <RulesPopUp />
        </MainContainer>
      )
    }}
  </RpsContext.Consumer>
)

export default RockPaperScissors
