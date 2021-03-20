import React from 'react';

const NotFound = (props) => {

    return (
        <div>
            <h1>주소가 올바르지 않아요 !</h1>
            <button onClick={() => {props.history.goBack()}}>메인페이지로</button>
        </div>
    );
};

export default NotFound;