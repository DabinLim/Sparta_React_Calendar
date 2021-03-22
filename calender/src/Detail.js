import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Detail = (props) => {

    return (
        <Container>
            <AddContainer>
                <InputContainer>
                    <Text>일정 : </Text>
                </InputContainer>
                <InputContainer>
                    <Text>상세내용 : </Text>
                </InputContainer>
            </AddContainer>
            <ButtonContainer>
                <Button color="primary">추가하기</Button>
                <Button color="primary">취소하기</Button>
            </ButtonContainer>
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

const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.div`
    margin: 30px;
    margin-left: 10px;
`;

const ButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:flex-end;
`;

const Text = styled.span`
    color: #3f51b5;
`;

const Title = styled.div`
    width:80vw;
`;

const Details = styled.div`
    width:80vw;
    height:40vh;
`;


export default Detail;