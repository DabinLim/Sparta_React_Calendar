import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDate } from './redux/modules/calendar';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components';
import moment from 'moment';
import { Button } from '@material-ui/core';
import { PlaylistAdd } from '@material-ui/icons';

const Calendar = (props) => {
  const calendar_list = useSelector(state => state.calendar.list);
  const dispatch = useDispatch()


  const today = moment()
  function generate(props) {
    const startWeek = props.date.clone().startOf('month').week();
    const endWeek = props.date.clone().endOf('month').week() === 1 ? 53 : props.date.clone().endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <Row key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = props.date.clone().week(week).startOf('week').add(n + i, 'day')
              let isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'now' : '';
              let isNotThisMonth = current.format('MM') === props.date.format('MM') ? '' : 'notthis';
              const checkToday = (e) => {
                if (e.completed === true && e.year == current.format('Y') && e.month == current.format('M') && e.day == current.format('D')) {
                  return true
                }
              }
              const filtered_calendar = calendar_list.filter(checkToday);
              return (
                <Box key={i} onClick={() => { props.history.push('/calendar/todo/' + current.format('Y') + '/' + current.format('M') + '/' + current.format('D')) }}>
                  <Day className={`${isToday}${isNotThisMonth}`}>{current.format('D')}</Day>
                  <TodoContainer>
                  {filtered_calendar.map((list, index) => {
                    return (
                        <TodoHandler key={index}>
                          <Todo completed={list.completed}>
                            {list.todo}
                          </Todo>
                          <TodoLine />
                        </TodoHandler>
                    )
                  })}
                  </TodoContainer>
                </Box>
              )
            })
          }
        </Row>
      )
    }
    return calendar;
  }
  return (
    <Container>
      <CalendarContainer>
        <Head>
          <ArrowLeft className='arrow' onClick={()=>{dispatch(changeDate(1))
          props.history.push('/allcalendar')}}/>
          <span className='title'>{props.date.format('MMMM YYYY')}</span>
          <ArrowRight className='arrow' onClick={()=>{dispatch(changeDate(2))
          props.history.push('/allcalendar')}}/>
        </Head>
        <DateBack>
          <HomeIcon className='home' fontSize="large" color='primary' onClick={() => { dispatch(changeDate(3))
          props.history.push('/allcalendar') }} />
        </DateBack>
        <Line />
        <Date>
          <Row>
            <Box>
              <DoW>Sun</DoW>
            </Box>
            <Box>
              <DoW>Mon</DoW>
            </Box>
            <Box>
              <DoW>Tue</DoW>
            </Box>
            <Box>
              <DoW>Wed</DoW>
            </Box>
            <Box>
              <DoW>Thu</DoW>
            </Box>
            <Box>
              <DoW>Fri</DoW>
            </Box>
            <Box>
              <DoW>Sat</DoW>
            </Box>
          </Row>
          {generate(props)}
        </Date>
        <ButtonContainer>
          <CollectContainer>
            <Button color='primary' onClick={() => { props.history.push('/calendar/alltodo') }}>모든 일정 모아보기</Button>
            <Button color='primary' onClick={() => { props.history.push('/calendar') }}>모든 일정 표시하기</Button>
          </CollectContainer>
          <FloatContainer onClick={() => { props.history.push('/calendar/adddate') }}>
            <PlaylistAdd className='add' />
          </FloatContainer>
        </ButtonContainer>
      </CalendarContainer>
    </Container>

  );
};
const Container = styled.div`
  background-color:gray;
`;

const CalendarContainer = styled.div`
  max-width: 1000px;
  min-height: 80vh;
  background-color: lavender;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Head = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-evenly;
  & .arrow{
    :hover{
      color:gold;
    }
  }
`;

const DateBack = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-right:20px;
  & .home{
    :hover{
      color:powderblue;
    }
  }
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;


const Date = styled.div`
  display: flex;
  flex-direction: column;

`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin: 10px;
`;


const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction:column;
  border: dotted 1px gray;
  width: calc(100%/7);
  font-size: 12pt;
  & .notthis{
    color:gray;
  }
  &:first-child{
    color: red;
  }
  &:last-child{
    color: blue;
  }
  & .now {
    color: gold;
    background-color:dodgerblue;
  }


  @media (max-width:400px) {
    height: 50px;
  }

  @media (min-width: 400px) {
    height: 60px;
  }

  @media (min-width: 500px) {
    height: 70px;
  }

  @media (min-width: 600px) {
    height: 80px;
  }

  @media (min-width: 650px) {
    height: 90px;
  }

  @media (min-width: 700px) {
    height: 100px;
  }

  @media (min-width: 800px) {
    height: 120px;
  }
  @media (min-width: 900px) {
    height: 140px;
  }
  @media (min-width:1000px) {
    height: 150px;
  }
`;

const TodoLine = styled.hr`
  margin: 5px 0px;
  border: 1px dotted #ddd;
`;

const DoW = styled.div`
  text-align:center;
  width:2em;
  height:2em;
  border-radius:2em;

  @media (max-width:750px) {
    padding-top:0.2em;
    padding-left:0.1em;
    padding-right:0.1em;
    font-size:xx-small;
  }
  @media (min-width:750px) {
    padding-top:0.5em;
    padding-left:0.2em;
    padding-right:0.2em;
  }
`;

const Day = styled.div`
  text-align:center;
  width:2em;
  height:2em;
  border-radius:2em;
  &:hover{
    color:black;
    background:pink;
  }
  @media (max-width:750px) {
    padding-top:0.2em;
    padding-left:0.1em;
    padding-right:0.1em;
    font-size:xx-small;
  }
  @media (min-width:750px) {
    padding-top:0.5em;
    padding-left:0.2em;
    padding-right:0.2em;
  }
`;



const TodoContainer = styled.div`
  display:flex;
  position:relative;
  overflow: auto;
  color:black;
  flex-direction:column;
  justify-content:space-between;
  width:80%;
  @media (max-width:750px) {
    margin: 0.2em;
  }
  @media (min-width:750px) {
    margin: 10px;
  }
  `;


const TodoHandler = styled.div`
  margin:0;
  padding:0;
  height:20px;
  width:100%;
`;


const Todo = styled.div`
  padding:0.1em;
  overflow:hidden;
  height:10px;
  width:100%;
  background-color: #ffe460b8;
  @media (max-width:750px) {
    margin:0;
    font-size: xx-small; 
    /* 왜 더 작게 안될까 */
  }
  @media (min-width:750px) {
    height:15px;
    font-size:x-small;
  }

  @media (min-width:1000px) {
    height:15px;
    font-size:small;
  }

`;

const ButtonContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin:20px;
`;

const FloatContainer = styled.div`
  opacity:0.7;
  top:60vh;
  left:60vw;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:dodgerblue;
  width:80px;
  height:80px;
  border-radius: 40px;
  & .add{
    color:white;
  }
  :hover{
    background-color:powderblue;
    & .add{
      color:#3f51b5;
    }
  }
  /* 아이패드보다 작아지는 이후 어느정도 유지하다가 650부터는 아이폰6~7 , 갤럭시 기준 으로 버튼 위치 고정 */
  @media (max-width:650px) {
    margin-top:20px;
    bottom:5%;
    width:40px;
    height:40px;
    border-radius:40px;
  }
  @media (min-width:750px) {
    bottom:7%
  }
  @media (min-width:1000px) {
    right:10%
  }
  @media (min-width:1200px) {
    right:13%
  }
  @media (min-width:1300px) {
    right:15%;
    bottom:5%;
  }
  @media (min-width:1400px) {
    right:17%
  }
  @media (min-width:1500px) {
    right:20%
  }
  @media (min-width:1650px) {
    right:25%
  }
`;

const CollectContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`;



export default Calendar;
