import {
  ScoreCardContainer,
  TextContainer,
  Text,
  ScoreContainer,
  ScoreTitle,
  ScoreResult,
} from './StyledComponent'

import RpsContext from '../../context/RpsContext'

const ScoreCard = () => (
  <RpsContext.Consumer>
    {value => {
      const {score} = value
      return (
        <ScoreCardContainer>
          <TextContainer>
            <Text>Rock Paper Scissors</Text>
          </TextContainer>

          <ScoreContainer>
            <ScoreTitle>Score</ScoreTitle>
            <ScoreResult>{score}</ScoreResult>
          </ScoreContainer>
        </ScoreCardContainer>
      )
    }}
  </RpsContext.Consumer>
)

export default ScoreCard
