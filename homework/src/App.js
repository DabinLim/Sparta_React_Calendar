import React from 'react';
import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import Message from './Message';
import Ranking from './Ranking';
import {Route,Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: '해리포터',
      page: 'ranking',
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
        <Switch>
          <Route path='/' exact component={Start}/>
          <Route path='/quiz' exact component={Quiz}/>
          <Route path='/message' exact component={Message}/>
          <Route path='/ranking' exact component={Ranking}/>
        </Switch>
      </div>
    );
  }
}



export default withRouter(App);