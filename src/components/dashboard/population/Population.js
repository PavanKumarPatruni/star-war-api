import React from 'react';

import { intToString } from '../../../utils'; 

const Population = props => {
    return <span data-test="planet-population" className="planet-population">{intToString(props.population)}</span>
}

export default Population;