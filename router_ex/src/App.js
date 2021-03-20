import React from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router';
import {Route, Link} from 'react-router-dom';
import Home from './Home'
import Gryffindor from './Gryffindor';
import Slytherin from './Slytherin';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return (
      <div className="App">
        <div>
          <Link to ='/'> Home으로 가기</Link>
          <Link to ='/Gryffindor/Harrypotter'>그리핀도르 기숙사로 가기</Link>
          <Link to ='/Slytherin'>슬리데린 기숙사로 가기</Link>
        </div>

        <Route exact path='/' component={Home}/>
        <Route path='/Gryffindor/:gryffindor_student' component={Gryffindor}/>
        <Route path='/Slytherin/:slytherin_student' component={Slytherin}/>

        <button onClick={() => {
          this.props.history.push('/')
        }}>Back to Home</button>
        <button onClick={() => {
          this.props.history.push('/Slytherin/Malfoy')
        }}>To Slytherin House</button>
        <button onClick={() => {
          this.props.history.push('/Gryffindor/Harrypotter')
        }}>To Gryffindor House</button>
        <button onClick={() => {
          this.props.history.goBack()
        }}>Go Back</button>
      </div>  
    );
  }
}


export default withRouter(App);