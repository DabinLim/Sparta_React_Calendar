import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import styled from "styled-components";

const Todo = (props) => {
    let url = document.location.href.split("/");
    let day = url[url.length - 1];
    let month = url[url.length -2];
    let year = url[url.length -3];
    return(
        <Container>
            <ButtonContainer color='primary'>
                <Button color='primary' onClick={() => {props.history.push('/todo/add/'+year+'/'+month+'/'+day)}}>추가하기</Button>
                <Button color='primary' onClick={() => {props.history.push('/') }}>접어두기</Button>
            </ButtonContainer>
            <Line />
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

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-around;
`;

export default Todo;