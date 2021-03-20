import React from 'react';
import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: '해리포터',
      page: 'quiz',
      list: [
        {
          question: "해리포터는 그리핀도르 기숙사 소속이다", answer:"o"
        },
        {
          question: "론는 그리핀도르 기숙사 소속이다", answer:"o"
        },
        {
          question: "헤르미온느는 그리핀도르 기숙사 소속이다", answer:"o"
        },
        {
          question: "말포이는 그리핀도르 기숙사 소속이다", answer:"x"
        }
      ],
      scoreMsg: "해리포터 덕후시네요!"
    };
  }

  render() {

    console.log(this.state);

      return (
      <div className="App">
        {this.state.page === "quiz" && (<Quiz list={this.state.list}/>)}
        {this.state.page === "start" && (<Start name={this.state.name}/>)}
        {this.state.page === "score" && (<Score name={this.state.name} scoreMsg={this.state.scoreMsg}/>)}
      </div>
    );
  }
}



export default App;