import React from 'react';

import Population from '../population/Population';

import { getFontValues } from '../../../utils';

const Planet = props => {
        
    const { value } = props;
    let numberPopulation = parseInt(value.population);

    let { fontSize, fontWeight } = getFontValues(numberPopulation);

    const style = {
        fontSize: fontSize+'px',
        fontWeight: fontWeight
    }

    const onPlanetClick = () => {
        if (props.hasOwnProperty('onPlanetClick')) {
            props.onPlanetClick(value);
        }
    }

    return (
        <div className="planet" onClick={onPlanetClick}>
            <span data-test="planet-title" className="planet-title" style={style}>{value.name}</span>
            <Population population={value.population} />
        </div>
    )
}

export default Planet;