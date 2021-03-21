import React from 'react';
import styled from 'styled-components';

const Ranking = (props) => {

    return (
        <Container>
            <Topbar>
                <Toptext>
                    101 
                </Toptext>
                명의 사람 중에서 당신은?
            </Topbar>
            <div>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
            <button></button>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width:90vw;
    height:100vh;
    margin:auto;
`;

const Topbar = styled.div`
    position: fixed;
    margin-top: 20px;
    z-index: 1;
    background-color: white;
`;

const Toptext = styled.button`
    text-align:center;
    padding: 8px 16px;
    background-color: lavender;
    border-radius: 30px;
    border-style:hidden;
`;

export default Ranking;