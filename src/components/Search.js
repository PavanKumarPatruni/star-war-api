import React from 'react';

import Planet from './Planet';
import Modal from './Modal';
import PlanetDetails from './PlanetDetails';

let timeout;

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "t",
            planets: [],
            loading: false,
            showModal: false,
            selectedPlanet: {}
        };
    }

    componentDidMount() {
        this.onSearch();
    }

    onTextChange = (e) => {
        let text = e.target.value;

        this.setState({
            text,
            loading: true
        });

        clearTimeout(timeout);
        
        timeout = setTimeout(function() {
            this.onSearch();
        }.bind(this), 200);
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.onSearch();
        }
    }
    
    onSearch = () => {
        let { text } = this.state;

        if (text.length > 0) {
            fetch(`https://swapi.co/api/planets?search=${text}`)
                .then(response => response.json())
                .then(response => {
                    let planets = response.results;

                    this.setState({
                        planets,
                        loading: false
                    });
                });
        } else {
            this.setState({
                planets: [],
                loading: false
            });
        }
    }

    onModalClose = () => {
        this.setState({
            showModal: false,
            selectedPlanet: {}
        });
    }

    onPlanetClick = planet => {

        console.log("lksjdlkajsdlajsldjlas");

        this.setState({
            showModal: true,
            selectedPlanet: planet
        });
    }

    render() {

        let { planets, loading, text, showModal, selectedPlanet } = this.state;

        let listComponents = null;
        if (loading) {
            listComponents = (<div className="not-found no-result">
                                <h1>Searching planets</h1>
                            </div>);
        } else if (planets.length === 0) {
            listComponents = (<div className="not-found no-result">
                                <h1>No results</h1>
                            </div>);
        } else {
            let list = planets.map(item => {
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
                <div className="search-box">
                    <input className="search-text" type="text" value={this.state.text} placeholder="Search here.." onKeyPress={this.handleKeyPress} onChange={this.onTextChange}/>
                    <button className="search-button" onClick={this.onSearch}>Search</button>
                </div>
                <div>
                { listComponents }
                </div>
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
        )
    }
}

export default Search;