
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AllTodo = (props) => {

    const calendar_list = useSelector(state => state.calendar.list);
    return (
        <Container>
            <Head>
                <Line />
                <ListStyle id='up'>
                    {calendar_list.map((list, index) => {
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
                    <ButtonBox>
                        <Button onClick={() => {
                            document.querySelector('#up').scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}>위로가기</Button>
                    </ButtonBox>
                </ListStyle>
            </Head>
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
    width:80%;
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



export default AllTodo;