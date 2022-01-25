import React, { Component } from 'react';
import Bottom from './Bottom.js';

export default class Slides extends Component {

    constructor() {
        super();
        this.state = {
            numberWeAt: 0
        }

        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);

    }


    goUp() {
        let num = this.state.numberWeAt + 1;
        if (num === this.props.peopleArr.length) {
            num = 0;
        }
        this.setState({numberWeAt: num});
    }

    goDown() {
        let num = this.state.numberWeAt - 1;
        if (num === -1) {
            num = this.props.peopleArr.length - 1;
        }
        this.setState({numberWeAt: num});
    }

    render () {

        let moviesMarkup = (<p></p>);

        if (this.props.peopleArr[this.state.numberWeAt].favoriteMovies) {
            moviesMarkup = this.props.peopleArr[this.state.numberWeAt].favoriteMovies.map( movie => (<p>{movie}</p>));
        }
        

        return (
            <div className = "content">
                <div className = "middlePart">
                    <h1>{this.state.numberWeAt + 1} / {this.props.peopleArr.length}</h1>
                    <div className = "infoAbout">
                        <h1>{this.props.peopleArr[this.state.numberWeAt].name.first} {this.props.peopleArr[this.state.numberWeAt].name.last}</h1>
                        <h3>From: {this.props.peopleArr[this.state.numberWeAt].city}, {this.props.peopleArr[this.state.numberWeAt].country}</h3>
                        <h3>Job Title: {this.props.peopleArr[this.state.numberWeAt].title}</h3>
                        <h3>Employer: {this.props.peopleArr[this.state.numberWeAt].employer}</h3>
                        <br/>
                        <h3>Favorite Movies: {moviesMarkup}</h3>
                    </div>
                </div> 
                <Bottom goUp = {this.goUp} goDown = {this.goDown}/>
            </div>
        )
    }
}