import React from 'react';

const Detail = (props) => {
    console.log(props.match);
    return (
        <div>
            안녕 나는 상세페이지
            <button onClick={()=>{props.history.goBack()}}>뒤로가기</button>
        </div>

    );
}

export default Detail;