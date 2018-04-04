// Code ClickityClick Component Here


import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false
    };
  }

  handleClicked = (event) => {
      this.setState({
        hasBeenClicked: true
      })
    console.log('clicked me')
  }

  render() {
    return (
      <div>
        <p> I have { this.state.hasBeenClicked ? null : 'not' } been clicked!</p>
        <button onClick={ this.handleClick }>Click me!</button>
      </div>
    );
  }
}


export default ClickityClick;
