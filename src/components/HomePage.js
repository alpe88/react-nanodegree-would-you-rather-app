import React, { Component } from 'react';



class HomePage extends Component {
  filterQuestions = (questions) => {
      return Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
  render() {
    const { users, questions, authedUser } = this.props
    return (
      <div className="home-page">
       {console.log('users: ', users)}
       {console.log('questions: ', questions)}
       {console.log('authedUser', authedUser)}

        <div className="container-fluid">
          <div className="row">
             <div className="col-12">
 
               <div className="">
{console.log('filtered questions: ', this.filterQuestions(questions))}

               </div>

             </div>
          </div>
        </div>




      </div>
    )
  }
}

export default HomePage;
