import React from 'react';

const PlanetDetails = props => {
        
    let { value } = props;

    return (
        <div className="planet-details">
            <div className="planet-detail"><span>Climate: </span>{value.climate}</div>
            <div className="planet-detail"><span>Diameter: </span>{value.diameter}</div>
            <div className="planet-detail"><span>Orbital Period: </span>{value.orbital_period}</div>
            <div className="planet-detail"><span>Rotation Period: </span>{value.rotation_period}</div>
            <div className="planet-detail"><span>Terrain: </span>{value.terrain}</div>
            <div className="planet-detail"><span>Surface water: </span>{value.surface_water}</div>
            <div className="planet-detail"><span>Gravity: </span>{value.gravity}</div>
        </div>
    )
}

export default PlanetDetails;