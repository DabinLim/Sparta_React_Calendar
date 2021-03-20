import React from 'react';


const Start = (props) => {
    

    const my_name = props.name;
    

    return (
        <div className="child">
            <h1 className="title">나는 {my_name}에 대해 얼마나 알고 있을까요?</h1>
            <input className ="input"type="text" placeholder="내 이름" />
            <button className="button">시작하기</button>
        </div>
    );
}


export default Start;