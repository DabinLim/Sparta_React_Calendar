import React from 'react';
import styled from "styled-components";
import Calendar from './Calendar';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCalendarFB } from './redux/modules/calendar';
import Main from './Main';
import Todo from './Todo';
import Add from './Add';
import AddDate from'./AddDate';
import AllTodo from './AllTodo';
import AllCalendar from './AllCalendar';
import { Moment as MomentTypes } from "moment";
import { withRouter } from 'react-router';



const mapStateToProps = (state) => ({
  calendar_list: state.calendar.list,
});

const mapDispatchToProps = (dispatch) => {
  return {

    load: () => {
      dispatch(loadCalendarFB());
    },
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };
  
  componentDidMount() {
    this.props.load()
  }

  render() {
    return (
      <Container>
        <Switch>
        <Route exact path='/' exact render={(props) => <Main history={props.history} list={this.props.list} />} />
        <Route path='/calendar' exact render ={(props) => <Calendar history={props.history} list={this.props.list}/>}/>
          <Route path='/calendar/todo/:year/:month/:day' render={(props) =>
            <div>
            <Calendar history={props.history} list={this.props.list} />
            <Todo history={props.history} />
            </div>
            } />
          <Route path='/calendar/todo/add/:year/:month/:day' render={(props) => <Add history={props.history} />} />
          <Route path='/calendar/adddate' render={(props) => <AddDate history={props.history} />} />
          <Route path='/calendar/alltodo' render={(props) => <AllTodo history={props.history} />} />
          <Route path='/calendar/allcalendar' render={(props) => <AllCalendar history={props.history} />} />
        </Switch>
      </Container>
    )
  };
};

const Container = styled.div`
  background: white;
  border-radius:20px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
