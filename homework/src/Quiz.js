import React from 'react';
import styled from 'styled-components'
import SwipeItem from './SwipeItem';

const Quiz = (props) => {
    const [num, setNum] = React.useState(0);
    const onSwipe = (direction) => {
        setNum(num +1);
        console.log(direction)
    }
    return (
        <QuizContainer>
            <p><span>{num+1}번문제</span></p>
            {props.list.map((l, idx) => {
                if(num === idx){
                    return (<Question key={idx}>{l.question}</Question>)
                }
            })}

            <AnswerZone>
                <Answer>
                    o
                </Answer>
                <Answer>
                    x
                </Answer>
            </AnswerZone>
            {props.list.map((l, idx) => {
                if(idx ===num) {
                    return (
                        <SwipeItem key={idx} onSwipe={onSwipe}/>
                    )
                }
            })}
        </QuizContainer>
    );
};

const QuizContainer = styled.div`
    text-align:center;
    & > p > span {
        padding: 8px 16px;
        background-color: lavender;
        border-radius: 30px;
    }
`;

const Question = styled.h1`
    font-size: 1.5em;
`;

const AnswerZone = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: absolute;
    top:0;
    left:0;
    z-index:1;
`;

const Answer = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 10em;
    font-weight: 600;
    color: #dadafc77;
`;


export default Quiz