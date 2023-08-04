// Write your code here

import {Component} from 'react'

import Login from '../Login/index'

import Logout from '../Logout/index'

import Message from '../Message/index'

import './index.css'

class Home extends Component {
  state = {isLogged: false}

  onButtonClick = () => {
    this.setState(prevState => {
      let result
      if (prevState.isLogged === true) {
        result = {isLogged: false}
      } else {
        result = {isLogged: true}
      }
      return result
    })
  }

  render() {
    const {isLogged} = this.state

    const message = isLogged ? 'Welcome User' : 'Please Login'

    const btn = isLogged ? (
      <Logout value={this.onButtonClick} />
    ) : (
      <Login value={this.onButtonClick} />
    )

    return (
      <div className="bg-container">
        <div className="container">
          <Message text={message} />
          {btn}
        </div>
      </div>
    )
  }
}

export default Home
