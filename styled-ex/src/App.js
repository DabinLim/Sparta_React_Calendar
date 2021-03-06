import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <MyStyled bgColor={"red"}>hello React</MyStyled>
    </div>
  );
}

const MyStyled = styled.div`
  width: 50vw;
  min-height: 150px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  &:hover{
    background-color: #ddd;
  } 
  background-color: ${(props) =>(props.bgColor ? "red" : "purple")};
`;

export default App;
