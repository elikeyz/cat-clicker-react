import React, { Component } from 'react';
import '../App.css';

class CatView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            src: this.props.src,
            clicks: this.props.clicks,
            admin: false,
            nameInput: this.props.name,
            srcInput: this.props.src,
            clicksInput: this.props.clicks
        };

        this.incrementClickCount = this.incrementClickCount.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSrcChange = this.handleSrcChange.bind(this);
        this.handleClicksChange = this.handleClicksChange.bind(this);
    }

    incrementClickCount = () => {
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    handleNameChange = (event) => {
        this.setState({
            nameInput: event.target.value
        });
    }

    handleSrcChange = (event) => {
        this.setState({
            srcInput: event.target.value
        });
    }

    handleClicksChange = (event) => {
        this.setState({
            clicksInput: event.target.value
        });
    }

    openAdmin = () => {
        this.setState({
            admin: true
        });
    }

    saveAdmin = () => {
        this.setState({
            name: this.state.nameInput,
            src: this.state.srcInput,
            clicks: Number(this.state.clicksInput),
            admin: false
        });
    }

    closeAdmin = () => {
        this.setState({
            admin: false
        });
    }

    render() {
        if (this.state.admin) {
            return (
                <div className="display">
                    <h3>Click the cats below</h3>
                    <div className="cat">
                        <p id="cat-name">{this.state.name}</p>
                        <img src={this.state.src} width="360px" id="cat-img" alt="Cat" onClick={this.incrementClickCount} />
                        <p id="cat-clicks">Clicks: {this.state.clicks}</p>
                    </div>
                    <button id="admin-btn" onClick={this.openAdmin}>Admin</button>
                    <div id="admin-form">
                        <div className="form-unit">
                            <p className="form-label">Name: </p>
                            <input type="text" id="admin-name" onChange={this.handleNameChange} value={this.state.nameInput} />
                        </div>
                        <div className="form-unit">
                            <p className="form-label">Image URL: </p>
                            <input type="text" id="admin-imgUrl" onChange={this.handleSrcChange} value={this.state.srcInput} />
                        </div>
                        <div className="form-unit">
                            <p className="form-label">Number of Clicks: </p>
                            <input type="number" id="admin-clicks" onChange={this.handleClicksChange} value={this.state.clicksInput} />
                        </div>
                        <div className="form-unit">
                            <button className="form-btn" id="admin-save" onClick={this.saveAdmin}>Save</button>
                            <button className="form-btn" id="admin-cancel" onClick={this.closeAdmin}>Cancel</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="display">
                    <h3>Click the cats below</h3>
                    <div className="cat">
                        <p id="cat-name">{this.state.name}</p>
                        <img src={this.state.src} width="360px" id="cat-img" alt="Cat" onClick={this.incrementClickCount} />
                        <p id="cat-clicks">Clicks: {this.state.clicks}</p>
                    </div>
                    <button id="admin-btn" onClick={this.openAdmin}>Admin</button>
                </div>
            );
        }
    }
}

export default CatView;