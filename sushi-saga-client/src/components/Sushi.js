import React, { Component } from 'react'

class Sushi extends Component {
  state = {
    eaten: false
  }

  handleClick = () => {
    if (this.state.eaten === false) {
      if (this.props.cash - this.props.sushi.price < 0) {
        window.alert("You don't have enough cash!!!")
      } else {
        this.setState({eaten: true})
        this.props.eatSushi(this.props.sushi)
        this.props.clickedSushi(this.props.sushi)
      }
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.handleClick}>
          {this.state.eaten ?
            null
          :
          <img src={this.props.sushi.img_url} width="100%" alt="sushi pieces" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
