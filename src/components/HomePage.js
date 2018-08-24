import React, { Component } from 'react';



class HomePage extends Component {

  render() {
    const { users, questions} = this.props
    return (
      <div className="home-page">
      {console.log('users passed to homepage: ', users)}
      </div>
    )
  }
}

export default HomePage;
