import React from 'react';
import styled from "styled-components";
import Calendar from './Calendar';
import { Route, Switch } from 'react-router-dom';
import Todo from './Todo';
import Add from './Add';
import { Moment as MomentTypes } from "moment";
import { withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { todo: 'ddkfadsfkadjfr' },
        { time: 'today' },
        { detail: 'hattodo' }
      ]
    };

  };

  render() {
    return (
      <Container>
        <Route path='/' exact render={(props) => <Calendar history={props.history} list={this.props.list} />} />
        <Switch>
          <Route path='/todo/:year/:month/:day' exact render={(props) =>
            <div>
            <Calendar history={props.history} list={this.props.list} />
            <Todo history={props.history} />
            </div>
            } />
          <Route path='/todo/add/:year/:month/:day' render={(props) => <Add history={props.history} />} />
        </Switch>
      </Container>
    )
  };
};

const Container = styled.div`
  background: white;
  border-radius:20px;
`;

export default withRouter(App);
