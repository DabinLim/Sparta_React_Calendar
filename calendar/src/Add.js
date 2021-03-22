import { Button, ButtonGroup } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { addCalendarFB } from './redux/modules/calendar';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';


const Add = (props) => {

    const dispatch = useDispatch();
    const todo_text = useRef(null);
    const detail_text = useRef(null);
    let url = document.location.href.split("/");
    let day = url[url.length - 1];
    let month = url[url.length -2];
    let year = url[url.length -3];
    return (
        <Container>
            <AddContainer>
                <InputContainer>
                    <Text>일정 : </Text>
                    <TitleInput ref={todo_text} />
                </InputContainer>
                <InputContainer>
                    <Text>상세내용 : </Text>
                    <DetailInput ref={detail_text}></DetailInput>
                </InputContainer>
            </AddContainer>
            <ButtonContainer>
                <Button color="primary" onClick={()=>{dispatch(addCalendarFB([
                    todo_text.current.value,detail_text.current.value,year,month,day
                ]));
                }}>추가하기</Button>
                <Button color="primary" onClick={() => {
                    props.history.goBack();
                }}>취소하기</Button>
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

const TitleInput = styled.input`
    width:100%;
`;

const DetailInput = styled.input`
    width:100%;
    height:40vh;
`;


export default (Add);