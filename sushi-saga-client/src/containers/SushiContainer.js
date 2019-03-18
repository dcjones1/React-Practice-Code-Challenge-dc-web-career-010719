import React, { Component, Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'
import LessButton from '../components/LessButton'

// Endpoint!
const API = "http://localhost:3000/sushis"

class SushiContainer extends Component {
  constructor() {
    super()

    this.state = {
      sushis: [],
      sushindex: 0,
      unEaten: []
    }
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis,
        unEaten: sushis
      })
    })
  }

  addIndex = () => {
    let index = this.state.sushindex
    if (this.state.unEaten.length <= 4 && this.state.sushis.length <= 4) {
      window.alert("These are the only sushis left!")
    } else if (this.state.unEaten.length - index <= 4) {
      this.setState({
        sushindex: 0,
        sushis: this.state.unEaten
      })
    } else {
      this.setState({
        sushindex: index + 4
      })
    }
  }

  minusIndex = () => {
    let index = this.state.sushindex
    if (this.state.unEaten.length <= 4 && this.state.sushis.length <= 4) {
      window.alert("These are the only sushis left!")
    } else if (index < 4) {
      window.alert("This is the beginning of the sushi!")
      this.setState({
        sushindex: 0,
        sushis: this.state.unEaten
      })
    } else {
      this.setState({
        sushindex: index - 4,
        sushis: this.state.unEaten
      })
    }
  }

  // remove after update
  clickedSushi = (sushi) => {
    let sushis = this.state.unEaten.filter(fish => fish !== sushi)
    this.setState({unEaten: sushis})
  }

  render() {
    let i = this.state.sushindex
    return (
      <Fragment>
        <div className="belt">
          <LessButton minusIndex={this.minusIndex} />
          {this.state.sushis.slice(i, i+4).map((sushi) => {
            return <Sushi sushi={sushi} key={sushi.id} eatSushi={this.props.eatSushi} clickedSushi={this.clickedSushi} cash={this.props.cash} />
          })}
          <MoreButton addIndex={this.addIndex} />

        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
