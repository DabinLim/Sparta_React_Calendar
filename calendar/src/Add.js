import { Button, ButtonGroup } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { addCalendarFB, loadCalendarFB } from './redux/modules/calendar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Add = (props) => {

    const dispatch = useDispatch();
    const todo_text = useRef(null);
    const detail_text = useRef(null);
    const classes = useStyles();
    let url = document.location.href.split("/");
    let day = parseInt(url[url.length - 1]);
    let month = parseInt(url[url.length -2]);
    let year = parseInt(url[url.length -3]);

    const addTodoList = () => {
        const time_box = document.querySelector('#time').value.split(':')
        let time = parseInt(time_box[0]);
        let minute = parseInt(time_box[1]);
        console.log(year,month,day,time,minute)
        if(todo_text.current.value =='' || detail_text.current.value==''){
            window.alert('일정을 입력하세요');
        }else if (isNaN(time) || isNaN(minute)) {
            window.alert('시간을 선택하세요')
        }else{
            dispatch(addCalendarFB([todo_text.current.value,detail_text.current.value,year,month,day,time,minute]));
            window.alert('일정이 추가 되었습니다.');
            dispatch(loadCalendarFB());
            props.history.goBack();
        }
    }

    return (
        <Container>
            <AddContainer>
                <InputContainer>
                    <Text>일정 : </Text>
                    <TitleInput ref={todo_text} />
                </InputContainer>
                <InputContainer>
                <TextField
                        id="time"
                        label="Alarm clock"
                        type="time"
                        defaultValue= '12:00'
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    </InputContainer>
                <InputContainer>
                    <Text>상세내용 : </Text>
                    <DetailInput ref={detail_text}></DetailInput>
                </InputContainer>
            </AddContainer>
            <ButtonContainer>
                <Button color="primary" onClick={addTodoList
                }>추가하기</Button>
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
    margin: 20px 0;
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


export default Add;