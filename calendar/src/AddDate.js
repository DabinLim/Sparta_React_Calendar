import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment, { Moment as MomentTypes } from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { addCalendarFB } from './redux/modules/calendar';
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

const AddDate = (props) => {
    const today = moment()
    const classes = useStyles();
    const dispatch = useDispatch();
    const todo_text = useRef(null);
    const detail_text = useRef(null);
    const checkdate = () => {
        const date = document.querySelector('#date').value.split('-')
        let year = parseInt(date[0])
        let month = parseInt(date[1])
        let day = parseInt(date[2])
        if(todo_text.current.value =='' || detail_text.current.value==''){
            window.alert('일정을 입력하세요');
        }else if(isNaN(year) || isNaN(month) || isNaN(day)) {
            window.alert('날짜를 선택하세요')
        }else {
            dispatch(addCalendarFB([todo_text.current.value,detail_text.current.value,year,month,day]))
            props.history.goBack()
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
                    <Text>날짜 : </Text>
                    <TextField
                        id="date"
                        label="날짜를 선택하세요."
                        type="date"
                        defaultValue ={today.format('YYYY-MM-DD')}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </InputContainer>
                <InputContainer>
                    <Text>상세내용 : </Text>
                    <DetailInput ref={detail_text}/>
                </InputContainer>
            </AddContainer>
            <ButtonContainer>
                <Button color="primary" onClick={checkdate}>추가하기</Button>
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


export default AddDate;