import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'
import {PopUpView, PopUpImage, RulesView} from './styledComponent'

const RulesPopUp = () => (
  <RulesView>
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          RULES
        </button>
      }
    >
      {close => (
        <PopUpView>
          <button
            type="button"
            className="trigger-button-close"
            onClick={() => close()}
          >
            <RiCloseLine />
          </button>
          <PopUpImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopUpView>
      )}
    </Popup>
  </RulesView>
)

export default RulesPopUp
