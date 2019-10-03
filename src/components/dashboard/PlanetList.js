import React from 'react';

import Planet from './planet/Planet';
import Modal from '../modal/Modal';
import PlanetDetails from './planet_details/PlanetDetails';

class PlanetList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            planets: [],
            text: '',
            showModal: false,
            selectedPlanet: {}
        };
    }

    static getDerivedStateFromProps(props) {
        return props;
    }

    onPlanetClick = planet => {
        this.setState({
            showModal: true,
            selectedPlanet: planet
        });
    }

    onModalClose = () => {
        this.setState({
            showModal: false,
            selectedPlanet: {}
        });
    }

    render() {

        let { planets, text, showModal, selectedPlanet } = this.state;

        let listComponents = (
            <div className="not-found no-result">
                <h1>No results</h1>
            </div>
        );
    
        if (planets.length !== 0) {
            const list = planets.map(item => {
                return <Planet key={item.name} value={item} onPlanetClick={this.onPlanetClick}></Planet>;
            })
    
            listComponents = (
                <React.Fragment>
                    <div className="searched-for">Search keyword: <span>{text}</span></div>
                    <div className="search-results">
                    {
                        list
                    }
                    </div>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
            {
                listComponents
            }
            {
                showModal ? 
                (
                <Modal title={'Details'} onClose={() => this.onModalClose()} width={500}>
                        <div className="planet">
                            <Planet value={selectedPlanet}/>
                            <PlanetDetails value={selectedPlanet} />
                        </div>
                </Modal>
                ) : null
            }
            </React.Fragment>
        );
    }
}

export default PlanetList;