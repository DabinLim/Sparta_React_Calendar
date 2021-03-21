import React from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
import {withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadBucket, createBucket} from './redux/modules/bucket';
import Detail from './Detail';
import NotFound from './NotFound';
import Progress from './Progress';

const mapStateToProps= (state) => {
  return {bucket_list: state.bucket.list};
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadBucket());
    },

    create: (bucket) => {
      dispatch(createBucket(bucket));
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.props)
  }

  addBucketList = () => {
    const new_item = this.text.current.value

    this.props.create(new_item);
  }


  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Progress/>
          <Line />
          <Switch>
            <Route path='/' exact render={(props) => <BucketList history = {props.history} list={this.props.bucket_list} />}/>
            <Route path='/detail/:index' component = {Detail}/>
            <Route render ={(props)=> <NotFound history={props.history} />} />
          </Switch>
        </Container>
        <InputContainer>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </InputContainer>

      </div>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const InputContainer = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));