import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';

const Main = (props) => {
    return(
        <Container>
            <Head>
                메인 페이지 입니다.
            </Head>
            <Button color='primary' onClick={props.history.push('/calendar')}>일정 관리 하러 가기</Button>
            <Line/>
        </Container>
    )
}


const Container = styled.div`
  max-width: 1400px;
  min-height: 80vh;
  background-color: lavender;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Head = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-evenly;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;


export default Main