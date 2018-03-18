import React from 'react';
import Output from './output'
import RestartButton from './restart-button'

const min = Math.ceil(1);
const max = Math.floor(100);
  
export default class HotAndCold extends React.Component {
  constructor(props) {
    super(props);  

    this.state = {
      number: min + Math.floor(Math.random() * (max-min+1)),
      guessed: [],
      count: 0
    }
  }

  onSubmit(event) {
    const guessed = this.state.guessed.slice();
    const number = this.numberInput.value;
    let count = this.state.count;

    count++;
    guessed.push(number+' ');
    event.preventDefault();
    this.numberInput.value = '';
    this.setGuessed(guessed, count);
  }

  setGuessed(guessed, count) {
    this.setState({
      guessed,
      count
    });  
  }

  reset() {
    this.setState({
        number: min + Math.floor(Math.random() * (max-min+1)),
        guessed: [],
        count: 0
    });
  }

  render() {
    const text = "Guess#";
    let hint = "";
    let length = this.state.guessed.length;

    let newGuess = this.state.guessed[length-1];

    if (Math.abs(this.state.number - newGuess) === 0) {
      hint = "YOU WON!";
    }    
    else if (Math.abs(this.state.number - newGuess) <= 5) {
      hint = "HOT";
    } 
    else if (Math.abs(this.state.number - newGuess) <= 10) {
      hint = "Kind of HOT";
    }
    else {
      hint = "COLD";
    }

    return (
      <div>
        <RestartButton onClick={() => this.reset()} />
        <form onSubmit={(e) => this.onSubmit(e)}>
          <h1>HOT or COLD</h1>
          <Output value={this.state.number} />
          <Output value={hint} />
          <input type="number" ref={input => this.numberInput = input}/>  
          <Output text={text} value={this.state.count} />
          <Output value={this.state.guessed} />
        </form>
      </div>
    );
  }
}
