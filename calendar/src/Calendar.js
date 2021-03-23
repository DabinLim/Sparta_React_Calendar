import React from 'react';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import styled from 'styled-components';
import moment, { Moment as MomentTypes } from 'moment';
import { Button } from '@material-ui/core';
import { PlaylistAdd } from '@material-ui/icons';

const Calendar = (props) => {
  function generate(props) {
    const today = moment();
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <Row key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = today.clone().week(week).startOf('week').add(n + i, 'day')
              let isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'now' : '';
              let isNotThisMonth = current.format('MM') === today.format('MM') ? '' : 'notthis';
              return (
                <Box key={i} onClick={() => { props.history.push('/todo/' + current.format('Y') + '/' + current.format('M') + '/' + current.format('D')) }}>
                  <DoW className={`${isToday}${isNotThisMonth}`}>{current.format('D')}</DoW>
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
      <Head>
        <ArrowLeft onClick={() => {
          props.history.push('/');
        }} />
        <span className='title'>{moment().format('MMMM YYYY')}</span>
        <ArrowRight onClick={() => { props.history.push('/') }} />
      </Head>
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
        <Button color='primary' onClick={() => {props.history.push('/alltodo')}}>모든 일정 모아보기</Button>
        <FloatContainer>
          <PlaylistAdd className='add' onClick={() => { props.history.push('/todo/adddate') }} />
        </FloatContainer>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
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
  width: calc(100%/7);
  height: 0;
  padding-bottom: calc(100%/7);
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
  }
`;


const DoW = styled.div`
  padding-top:1em;
  padding-left:0.5em;
  padding-right:0.5em;
  text-align:center;
  width:2em;
  height:2em;
  border-radius:2em;
  &:hover{
    color:black;
    background:pink;
  }
`;

const ButtonContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin:20px;
`;

const FloatContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:dodgerblue;
  width:40px;
  height:40px;
  border-radius: 20px;
  & .add{
    color:white;
  }
  :hover{
    background-color:powderblue;
    & .add{
      color:#3f51b5;
    }
  }
`;

const AddContainer = styled.div`

`;

const Explain = styled.div`
  text-align:center;
`;

const AllTodo = styled.div`

`;


export default Calendar;
