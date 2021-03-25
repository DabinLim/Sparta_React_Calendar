import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCalendarFB, deleteCalendarFB } from './redux/modules/calendar';
import { Button, ButtonGroup } from '@material-ui/core';
import styled from "styled-components";


const Todo = (props) => {
    const dispatch = useDispatch();
    const calendar_list = useSelector(state => state.calendar.list);
    useEffect(()=>{window.scrollTo({top:1000,left:0, behavior: 'smooth'})})

    const scrollDown = () => {
        window.scrollTo({top:1000 ,left:0 ,behavior:'smooth'})
    }
    let url = document.location.href.split("/");
    let day = url[url.length - 1];
    let month = url[url.length - 2];
    let year = url[url.length - 3];

    const isToday = (e) => {
        if (e.year == year && e.month == month && e.day == day) {
            return true;
        }
    }

    const filtered_calendar = calendar_list.filter(isToday);
    console.log(filtered_calendar)


    return (
        <Back>
        <Container>
            <Head>
                <ButtonContainer color='primary'>
                    <Button color='primary' onClick={() => { props.history.push('/add/' + year + '/' + month + '/' + day) }}>오늘 일정 추가하기</Button>
                    <Button color='primary' onClick={() => { props.history.push('/calendar') }}>접어두기</Button>
                </ButtonContainer>
            </Head>
            <Line />
            <ListStyle id='up'>
                {filtered_calendar.map((list, index) => {
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
                                    dispatch(updateCalendarFB(calendar_list.indexOf(list)))
                                    props.history.push('/calendar/todo/'+year+'/'+month+'/'+day)
                                }}>완료하기</Button>
                                <Button color='primary' onClick={() => {
                                    dispatch(deleteCalendarFB(calendar_list.indexOf(list)))
                                }}>삭제하기</Button>
                            </DeleteContainer>
                        </TodoContainer>
                    );
                })}
                <ButtonBox>
                    <ButtonUp onClick={() => {
                        document.querySelector('#up').scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>위로가기</ButtonUp>
                    <ButtonUp onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>캘린더로</ButtonUp>
                </ButtonBox>
            </ListStyle>
        </Container>
        </Back>
    );
}

const Back =styled.div`
    background:gray;
`;

const Container = styled.div`
  max-width: 600px;
  min-height: 40vh;
  max-height: 60vh;
  overflow:auto;
  background-color: lavender;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Head = styled.div`
    
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
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

const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-around;
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


export default Todo;