import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
      name: 'Kristen',
        city: 'Maple Grove'
    }
    //makes this in handleChange the same as this in the constructor
    // this.handleChange = this.handleChange.bind(this);
  };
  }

// handleChange(event) {
handleNameChange = (event) => {
  console.log('input was changed');
  console.log('event.target.value', event.target.name.value);
  // this.state.user = event.target.value;
  this.setState({ user: {
    name: event.target.value,
  city: this.state.user.city}
 });
}
handleCityChange = (event) => {
  console.log('input was changed');
  console.log('event.target.value', event.target.value);
  // this.state.user = event.target.value;
  this.setState({ user: {
    city: event.target.value,
  name: this.state.user.name}
 });
}
buttonClicker = (event) => {
  console.log(this.state.user)
}
render() {
  return (
    <div>
      The current user is {this.state.user.name}
      <input onChange={this.handleNameChange} placeholder="User Name" />
      and they are from {this.state.user.city}
      <input onChange={this.handleCityChange} placeholder="City" />
      <button onClick={this.buttonClicker}>button!!!</button>
    </div>
  );
}
}

export default App;
