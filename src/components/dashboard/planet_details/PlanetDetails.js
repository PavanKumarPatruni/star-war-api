import React from 'react';

const PlanetDetails = props => {
        
    const { value } = props;

    return (
        <div className="planet-details">
            <div className="planet-detail">
                <span className="title">Climate: </span>
                <span data-test="planet-climate">{value.climate}</span>
            </div>
            <div className="planet-detail">
                <span className="title">Diameter: </span>
                <span data-test="planet-diameter">{value.diameter}</span>
            </div>
            <div className="planet-detail">
                <span className="title">Orbital Period: </span>
                <span data-test="planet-orbital-period">{value.orbital_period}</span>
            </div>
            <div className="planet-detail">
                <span className="title">Rotation Period: </span>
                <span data-test="planet-rotation-period">{value.rotation_period}</span>
            </div>
            <div className="planet-detail">
                <span className="title">Terrain: </span>
                <span data-test="planet-terrain">{value.terrain}</span>
            </div>
            <div className="planet-detail">
                <span className="title">Surface water: </span>
                <span data-test="planet-surface-water">{value.surface_water}</span>
            </div>
            <div className="planet-detail">
                <span className="title">Gravity: </span>
                <span data-test="planet-gravity">{value.gravity}</span>
            </div>
        </div>
    )
}

export default PlanetDetails;