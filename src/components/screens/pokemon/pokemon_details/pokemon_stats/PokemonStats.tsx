import React from 'react';

const PokemonStats = (props:any) => {
    return (
        <div style={{width: '100%'}}>
            <div className={'stats-container'}>
                <div className='title-container'>
                    <h3>Base Happiness</h3>
                </div>
                <div className='bar-container'>
                    <div className={'stat-bar'} style={{width: props.data.baseHappines*2}}/>
                </div>
            </div>
            <div className={'stats-container'}>
                <div className='title-container'>
                    <h3>Capture Rate</h3>
                </div>
                <div className="bar-container">
                    <div className="stat-bar" style={{width: props.data.captureRate*2}}/>
                </div>
            </div>
            <div className={'stats-container'}>
                <div className='title-container'>
                    <h3>Hatch Counter</h3>
                </div>
                <div className="bar-container">
                    <div className="stat-bar" style={{width: props.data.hatchCounter*2}}/>
                </div>
            </div>
        </div>
    );
};

export default PokemonStats;