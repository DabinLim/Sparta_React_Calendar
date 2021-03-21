import React from 'react';
import styled from 'styled-components';
import img from './death_hollows.png';

const Message = (props) => {
    

    const my_name = props.name;
    

    return (
        <Container>
            <ImgSize>
                <img src={img}/>
            </ImgSize>
            <h1 className="title">{my_name}에게 남기는 한마디</h1>
            <Input className ="input"type="text" placeholder="한마디" />
            <Button>남기고 랭킹 보러 가기</Button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width:90vw;
    height:100vh;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

const Button = styled.button`
    text-align:center;
    padding: 8px 16px;
    background-color: lavender;
    border-radius: 30px;
    border-style:hidden;
    margin-top:40px;
`;

const Input = styled.input`
    border-radius:30px;
    border-color:lavender;
    height: 10vw;
    width:80vw;
`;

const ImgSize = styled.div`
    img {
        width: 120px;
        height: 200px;
    }
`;    


export default Message;