import RpsContext from '../../context/RpsContext'
import './index.css'

const GameCard = props => (
  <RpsContext.Consumer>
    {value => {
      const {choice} = props
      const {id, imageUrl} = choice
      const {onClickChoice} = value
      const onChoiceClick = () => {
        onClickChoice(id)
      }

      return (
        <li className="each-game-container">
          <button
            type="button"
            className="choice-btn"
            onClick={onChoiceClick}
            data-testid={`${id.toLowerCase()}Button`}
          >
            <img src={imageUrl} alt={id} className="choice-image" />
          </button>
        </li>
      )
    }}
  </RpsContext.Consumer>
)

export default GameCard
