import React from 'react';

const Slytherin = (props) => {
    return (
        <div>
            <div>
            10 points to Slytherin
            </div>
            <ul>
                <li>{props.match.params.slytherin_student}</li>
                <li></li>
                <li></li>
            </ul>
        </div>      
    );
}

export default Slytherin;