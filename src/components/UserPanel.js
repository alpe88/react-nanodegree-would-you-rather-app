import React, { Component } from 'react'

import { connect } from 'react-redux'

class UserPanel extends Component {

  render() {
    
    const { user, questionCount, answerCount, score, rank } = this.props
    const { name, avatarURL } = user
    
    return (
      <div className="user-panel py-1">
        <div className="container">
          <div className="card py-3">
            <div className="row">
              <div className="col-md-4">
                  <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar-big" />
                </div>
                <div className="col-md-4">
                  <div className="card-block">
                    <h4 className="card-title">{name} is ranked { rank+1 }</h4>
                    <p> with { questionCount } questions asked and { answerCount } questions answered for a score of <strong>{ score }</strong>.</p>
                  </div>
                </div>
                <div className="col-md-4">
                
                </div>
              </div>
            </div>
    </div>
  </div>
    )
  }
}
function mapStateToProps({ questions, users }, { id }) {
  const user = users[id]
  return {
    user: user
  }
}

export default connect(mapStateToProps)(UserPanel)