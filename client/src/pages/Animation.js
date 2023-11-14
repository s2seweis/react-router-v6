import React from 'react';
import AnimationOrbit from '../components/orbit/Orbit';

const Animation = () => {
    return (
        <div>
            <div style={{ margin: '15px 0px 0px 15px', display: 'flex' }}>
                <a href="javascript:history.back()">Go Back</a>
            </div>
            <h1>Animation Orbit:</h1>
            <AnimationOrbit></AnimationOrbit>
        </div>
    );
};

export default Animation;