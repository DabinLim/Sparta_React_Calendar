import React from 'react';
import styled from 'styled-components';
import {CloudDownload} from '@material-ui/icons';

const Spinner = (props) => {
    return (
        <Outter>
            <CloudDownload style = {{fontSize: '150px', color:'lavender'}}/>
        </Outter>
    )
}

const Outter = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;

`;

export default Spinner;