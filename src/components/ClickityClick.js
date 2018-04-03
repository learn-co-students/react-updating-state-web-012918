// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      },
    };
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked)) // prints true
  }

  // this.setState({
  //   addressInfo: {
  //     ...this.state.addressInfo,
  //     city: 'New York City',
  //   },
  // });

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not '}been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick';

ReactDOM.render(
  <ClickityClick />,
  document.getElementById('root')
);
