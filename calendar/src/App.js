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
import Spinner from './Sppiner';
import { withRouter } from 'react-router';




const mapStateToProps = (state) => ({
  calendar_list: state.calendar.list,
  date : state.calendar.date,
  is_loaded: state.calendar.is_loaded
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
    console.log('first load')
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.props.calendar_list === prevProps.calendar_list) {
      this.props.load();
      console.log('render again')
    }
  }

  render() {
    return (<div>
      {!this.props.is_loaded ? (<Spinner />) : (
      <Container>
        <Route exact path='/' exact render={(props) => <Main history={props.history} list={this.props.calendar_list} />} />
        <Switch>
          <Route path='/calendar' exact render ={(props) => <Calendar history={props.history} list={this.props.calendar_list} date={this.props.date}/>}/>
          <Route path='/calendar/todo/:year/:month/:day' render={(props) =>
            <div>
            <Calendar history={props.history} list={this.props.calendar_list} date={this.props.date}/>
            <Todo history={props.history} list={this.props.calendar_list} date={this.props.date}/>
            </div>
            } />
          <Route path='/add/:year/:month/:day' render={(props) => <Add history={props.history} date={this.props.date}/>} />
          <Route path='/calendar/adddate' render={(props) => <AddDate history={props.history} date={this.props.date}/>} />
          <Route path='/calendar/alltodo' render={(props) => <AllTodo history={props.history} list={this.props.calendar_list}/>}date={this.props.date} />
          <Route path='/calendar/allcalendar' render={(props) => <AllCalendar history={props.history} list={this.props.calendar_list} date={this.props.date}/>} />
        </Switch>
      </Container>
        )}
      </div>
    )
  };
};

const Container = styled.div`
  background: white;
  border-radius:20px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
