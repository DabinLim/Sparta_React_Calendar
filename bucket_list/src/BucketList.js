import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

const BucketList = (props) => {
  const bucket_list = useSelector(state => state.bucket.list);

  return (
    <div>
      <ListStyle id ='up'>
        {bucket_list.map((list, index) => {
          return (
            <ItemStyle key={index} completed={list.completed} onClick={() => { props.history.push('/detail/' + index) }}>
              {list.text}
            </ItemStyle>
          );
        })}
        <ButtonBox>
        <Button onClick={() => {
          document.querySelector('#up').scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>위로가기</Button>
        </ButtonBox>
      </ListStyle>
    </div>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  font-weight: 600;
  color: ${props => props.completed ? 'white' : 'black'};
  background-color: ${props => props.completed ? 'dodgerblue' : 'aliceblue'};
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
  margin: 20px
`;


export default BucketList;