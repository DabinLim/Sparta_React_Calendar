import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBucket, deleteBucketFB, updateBucket, updateBucketFB } from './redux/modules/bucket';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import {Button} from '@material-ui/core';

const Detail = (props) => {

    const dispatch = useDispatch();

    const bucket_list = useSelector((state) => state.bucket.list);


    let bucket_index = parseInt(props.match.params.index);
    console.log(props)

    return (
        <div>
            <h1>{bucket_list[bucket_index].text}</h1>
            <ButtonGroup color="primary">
                <Button onClick={() => {
                    dispatch(deleteBucketFB(bucket_index));
                    props.history.goBack();
                }}>삭제하기</Button>
                <Button onClick={() => {
                    console.log(bucket_index)
                    dispatch(updateBucketFB(bucket_index));
                    props.history.goBack();
                }}>완료하기</Button>
                <Button onClick={() => {
                    props.history.goBack();
                }}>뒤로가기</Button>
            </ButtonGroup>
        </div>
    );
}

export default Detail;