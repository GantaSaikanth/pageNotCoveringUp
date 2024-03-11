import './index.css'

const Navbar = props => {
  const {score, time} = props

  return (
    <li className="navbar-container">
      <div className="match-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </div>
      <div className="score-container">
        <p className="score-para">
          Score: <span className="score-span">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="time">{time} sec</p>
        </div>
      </div>
    </li>
  )
}

export default Navbar
