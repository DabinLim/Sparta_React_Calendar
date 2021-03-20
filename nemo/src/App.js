import React from 'react';
import Nemo from './Nemo';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 3,
    };
    
    this.div = React.createRef();
  }

  hoverEvent = (e) => {
    e.target.style.background = '#eee'
  }

  componentDidMount(){
    this.div.current.addEventListener('click', this.hoverEvent)
  }

  componentWillUnmount(){
    this.div.current.removeEventListener('click',this.hoverEvent)
  }



  render() {
    return (
      <div className="App" ref = {this.div}>
        <Nemo/>
      </div>
    )
  }
}


export default App;
