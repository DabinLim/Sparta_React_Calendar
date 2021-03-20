import React from 'react';

const Gryffindor = (props) => {
    console.log(props.match);
    return (
        <div>
            <div>
            10 points to Gryffindor
            </div>
            <ul>
                <li>{props.match.params.gryffindor_student}</li>
                <li></li>
                <li></li>
            </ul>
        </div>      
    );
}

export default Gryffindor;