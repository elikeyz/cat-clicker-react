import React, { Component } from 'react';
import cats from '../models/cats';
import CatView from '../components/CatView';
import '../App.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: cats[0].id,
            name: cats[0].name,
            src: cats[0].src,
            clicks: cats[0].clicks
        };
    }

    setCat = (catIndex) => {
        this.setState({
            id: cats[catIndex].id,
            name: cats[catIndex].name,
            src: cats[catIndex].src,
            clicks: cats[catIndex].clicks
        });
    }

    render() {
        return (
            <div className="main">
                <div className="navbar">
                    <p>Select a Cat</p>
                    <ul className="cat-names">
                    { cats.map((cat, index) => <li key={cat.id}><button id={cat.id} onClick={this.setCat.bind(this, index)}>{cat.name}</button></li>) }
                    </ul>
                </div>
                <CatView name={this.state.name} src={this.state.src} clicks={this.state.clicks} />
            </div>
        );
    }
}

export default Main;