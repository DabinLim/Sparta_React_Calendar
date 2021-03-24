
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCalendarFB, deleteCalendarFB } from './redux/modules/calendar';
import { Button, ButtonGroup } from '@material-ui/core';
import styled from 'styled-components';

const AllTodo = (props) => {
    const dispatch = useDispatch();
    const calendar_list = useSelector(state => state.calendar.list);
    console.log(props)
    return (
        <Container>
            <ListStyle id='up'>
                <Line />
                {calendar_list.map((list, index) => {
                    return (
                        <TodoContainer key={index} completed={list.completed}>
                            <DateContainer>
                                <Title>
                                    {list.todo}
                                </Title>
                                <Date>
                                    {list.year}-{list.month}-{list.day}
                                </Date>
                            </DateContainer>
                            <Detail>
                                {list.detail}
                            </Detail>
                            <DeleteContainer>
                                <Button color='primary' onClick={() => {
                                    dispatch(updateCalendarFB(index))
                                    props.history.push('/calendar/alltodo')
                                }}>완료하기</Button>
                                <Button color='primary' onClick={() => {
                                    dispatch(deleteCalendarFB(index))
                                }}>삭제하기</Button>
                            </DeleteContainer>
                        </TodoContainer>
                    );
                })}
            </ListStyle>
                <ButtonBox>
                    <Button color='primary' onClick={()=>{props.history.push('/calendar')}}>뒤로가기</Button>
                    <Button color='primary' onClick={() => {
                        document.querySelector('#up').scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>위로가기</Button>
                </ButtonBox>
        </Container>

    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    max-width: 600px;
    min-height: 60vh;
    background-color: lavender;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ButtonUp = styled.button`
  width:80px;
  height:30px;
  margin-right: 10px;
  background-color: dodgerblue;
  border-radius:30px;
  border:0;
  outline:0;
  &:hover{
    background-color: powderblue;
  }
`;

const ButtonBox = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: flex-end;
  margin: 20px;
`;

const Head = styled.div`
  display:flex;
  position:fixed;
  flex-direction:row;
  align-items:center;
  justify-content:space-evenly;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const TodoContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    max-width:600px;
    width:90%;
    padding: 10px;
    margin: 5px;
    font-weight: 600;
    background-color: ${props => props.completed ? '#ffe460b8' : 'aliceblue'};
`;

const Title = styled.div`
    max-width:60%;
    overflow:auto;
    margin:5px;
    font-size: large;
`;
const Detail = styled.div`
    overflow:auto;
    max-width:80%;
    margin:10px;
`;
const Date = styled.div`
    
`;
const DateContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:5px;
`;

const DeleteContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin:5px;
`;

export default AllTodo;