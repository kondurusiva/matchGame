import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <ul className="score-container">
        <li>
          <p className="score">Score:{score}</p>
        </li>
        <li className="list-container">
          <img
            className="timer-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="timer">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
