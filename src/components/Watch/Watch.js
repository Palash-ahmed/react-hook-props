import React, { useState } from 'react';
import { useEffect } from 'react';

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
        <div>
            <h2>This is my smart watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increasedSteps}>De Dour.....</button>
        </div>
    );
};

export default Watch;