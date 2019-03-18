import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

class App extends Component {
  state = {
    plates: [],
    wallet: 5000,
    eaten: []
  }

  eatSushi = (sushi) => {
    let cash = this.state.wallet - sushi.price
    this.setState({
      eaten: [...this.state.eaten, sushi],
      plates: [...this.state.plates, sushi],
      wallet: cash
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} cash={this.state.wallet} />
        <Table plates={this.state.plates} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;
