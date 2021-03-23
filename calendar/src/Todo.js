import React from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';
import styled from "styled-components";

const Todo = (props) => {

    const calendar_list = useSelector(state => state.calendar.list);
    
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
        <Container>
            <Head>
                <ButtonContainer color='primary'>
                    <Button color='primary' onClick={() => { props.history.push('/todo/add/' + year + '/' + month + '/' + day) }}>오늘 일정 추가하기</Button>
                    <Button color='primary' onClick={() => { props.history.push('/') }}>접어두기</Button>
                </ButtonContainer>
            </Head>
            <Line />
            {filtered_calendar.map((list, index) => {
                return (
                    <TodoContainer key={index}>
                        <Title>
                            {list.todo}
                        </Title>
                        <Detail>
                            {list.detail}
                        </Detail>
                        <DateContainer>
                            <Date>
                                {list.year}-{list.month}-{list.day}
                            </Date>
                        </DateContainer>
                    </TodoContainer>
                );
            })}

        </Container>
    );
}


const Container = styled.div`
  max-width: 600px;
  min-height: 40vh;
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

const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-around;
`;

const TodoContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 10px;
    margin: 5px;
    font-weight: 600;
    background-color: aliceblue;
`;

const Title = styled.div`
    margin:5px;
    font-size: large;
`;
const Detail = styled.div`
    margin:10px;
`;
const Date = styled.div`
    
`;
const DateContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin:5px;
`;

export default Todo;