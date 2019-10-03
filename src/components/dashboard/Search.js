import React from 'react';

import PlanetList from './PlanetList';

let timeout;

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "t",
            planets: [],
            loading: false
        };
    }

    componentDidMount() {
        this.onSearch();
    }

    onTextChange = (e) => {
        const text = e.target.value;

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
        const { text } = this.state;

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

    render() {

        const { planets, loading, text } = this.state;

        let listComponents = null;
        if (loading) {
            listComponents = (<div className="not-found no-result">
                                <h1>Searching planets</h1>
                            </div>);
        } else {
            listComponents = <PlanetList planets={planets} text={text}/>
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
            </React.Fragment>   
        )
    }
}

export default Search;