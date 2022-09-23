import React from 'react';

const Dail = (props) => {
    return (
        <div style={{border:'2px solid red', margin: '5px'}}>
            <h3>This is Dail</h3>
            <p>steps so far: {props.steps}</p>
        </div>
    );
};

export default Dail;