import React, { useState } from 'react';
import { useEffect } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increasedSteps = () => {
       const newSteps = steps + 1;
        setSteps(newSteps);
    }

    useEffect (() => {
        console.log(steps);
    }, [steps])
    
    return (
        <div style={{border: '2px solid purple', margin: '5px'}}>
            <h2>This is my smart watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increasedSteps}>De Dour.....</button>
            <Display name='garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;