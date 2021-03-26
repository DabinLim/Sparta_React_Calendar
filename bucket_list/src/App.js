import React from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadBucketFB, addBucketFB } from './redux/modules/bucket';
import Detail from './Detail';
import NotFound from './NotFound';
import Progress from './Progress';
import Spinner from './Sppiner';

const mapStateToProps = (state) => ({
  bucket_list: state.bucket.list,
  is_loaded: state.bucket.is_loaded
});

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadBucketFB());
    },

    create: (bucket) => {
      dispatch(addBucketFB(bucket));
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
    this.props.load()
    console.log(this.props)
  };

  addBucketList = () => {
    const new_item = this.text.current.value

    this.props.create(new_item);
  }


  render() {
    return (
      <div className="App">
        {!this.props.is_loaded ? (<Spinner />) : (
          <React.Fragment>
            <Container>
              <Title>내 버킷리스트</Title>
              <Progress />
              <Line />
              <Switch>
                <Route path='/' exact render={(props) => <BucketList history={props.history} list={this.props.bucket_list} />} />
                <Route path='/detail/:index' component={Detail} />
                <Route render={(props) => <NotFound history={props.history} />} />
              </Switch>
            </Container>
            <InputContainer>
              <Input type="text" ref={this.text} />
              <Button onClick={this.addBucketList}>추가하기</Button>
            </InputContainer>

          </React.Fragment>
        )}
      </div>
    );
  }
}
const Button = styled.button`
  width:80px;
  height:30px;
  background-color: dodgerblue;
  border-radius:30px;
  border:0;
  outline:0;
  &:hover{
    background-color: powderblue;
  }
`;
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
  display:flex;
  align-items:center;
  justify-content:space-between;
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Input = styled.input`
  padding:5px;
  &:hover{
    border-color:dodgerblue;
  }
  &:focus{
    border-color:dodgerblue;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));