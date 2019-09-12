import React from 'react';

function intToString (value) {
    let num = Number(value);
    if (isNaN(num)) return value;
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor(("" + num).length / 3);
    var shortValue = parseFloat((suffixNum !== 0 ? (num / Math.pow(1000, suffixNum)) : num).toPrecision(2));

    return shortValue + " " + suffixes[suffixNum];
}

const Population = props => {
    return <span className="planet-population">{intToString(props.population)}</span>
}

const Planet = props => {
        
    let { value } = props;
    let numberPopulation = parseInt(value.population);

    let fontsize = 20;
    let fontweight = 300;

    while(numberPopulation > 100000) {
        numberPopulation /= 100;
        fontsize += 4;
        fontweight += 100;
    }

    let style = {
        fontSize: fontsize+'px',
        fontWeight: fontweight
    }

    const onPlanetClick = () => {
        props.onPlanetClick(value);
    }

    return (
        <div className="planet" onClick={onPlanetClick}>
            <span className="planet-title" style={style}>{value.name}</span>
            <Population population={value.population} />
        </div>
    )
}

export default Planet;