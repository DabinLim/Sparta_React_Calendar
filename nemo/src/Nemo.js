import React from 'react';
import styled from 'styled-components';

const Nemo = (props) => {
    const [count, setCount] = React.useState(3);
    console.log('in nemo');
    console.log(count);

    const addNemo = () => {
        setCount(count + 1);
    }

    const removeNemo = () => {
        count > 0 ? setCount(count -1) : window.alert('네모가 없어용');
    }

    const nemo_count = Array.from({length: count}, (v, i) => (i));
    return <div className="App">
        {nemo_count.map((num, idx) => {
            return (
                <Square key={idx}>
                    nemo{num + 1}
                </Square>
            )
        })}
        <button onClick={addNemo}>하나 추가</button>
        <button onClick={removeNemo}>하나 빼기</button>
    </div>;
}

const Square = styled.div`
  width: 150px;
  height: 150px;
  background-color: #eee;
  margin: 10px
`

export default Nemo;