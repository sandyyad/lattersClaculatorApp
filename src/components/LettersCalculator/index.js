// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {newWord: ''}

  getLenghtOfWord = event => {
    this.setState({newWord: event.target.value})
  }

  render() {
    const {newWord} = this.state

    const count = newWord.length

    return (
      <div className="main-div">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <h1 className="heading">Letters you</h1>
          <h1 className="heading">enter</h1>
          <label htmlFor="labelElement">Enter the phrase</label>
          <input
            id="labelElement"
            onChange={this.getLenghtOfWord}
            type="text"
            value={newWord}
          />

          <p>
            No.of letters:<span>{count}</span>
          </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
