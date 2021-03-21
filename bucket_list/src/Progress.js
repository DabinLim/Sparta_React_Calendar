import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Progress = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);
    let count = 0;

    bucket_list.map((l, idx) => {
        if(l.completed){
            count ++;
        }

    })


    return (
        <ProgressBar>
            <HighLight width={(count/bucket_list.length)*100 + '%'}/>
        </ProgressBar>
    );
}

const ProgressBar = styled.div`
    background:#eee;
    width: 100%;
    height: 40px;
    z-index:0;
`;

const HighLight = styled.div`
    background: red;
    width: ${props=> props.width};
    height: 40px;
    transition: width 1s;
    z-index:1;
`;

export default Progress;