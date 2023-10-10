import RpsContext from '../../context/RpsContext'
import './index.css'

const ResultView = () => (
  <RpsContext.Consumer>
    {value => {
      const {result, randomImgUrl, choiceImgUrl, onPlayAgain} = value
      const onClickPlayAgain = () => {
        onPlayAgain()
      }
      return (
        <div className="result-container">
          <div className="result-view-container">
            <div className="result-view">
              <p className="player-details">YOU</p>
              <img
                src={choiceImgUrl}
                alt="your choice"
                className="result-image"
              />
            </div>
            <div className="result-view">
              <p className="player-details">OPPONENT</p>
              <img
                src={randomImgUrl}
                alt="opponent choice"
                className="result-image"
              />
            </div>
          </div>
          <p className="result-text">{result}</p>
          <button
            type="button"
            onClick={onClickPlayAgain}
            className="playAgain-btn"
          >
            PLAY AGAIN
          </button>
        </div>
      )
    }}
  </RpsContext.Consumer>
)

export default ResultView
