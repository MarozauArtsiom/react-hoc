import React, { Component } from 'react';

import { MovieView } from './movieView';

const MovieDb = require('moviedb-promise');
const moviedbService = new MovieDb('aa24d560de8a326442f6123fdfb02a59');

export class MovieContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            films: [],
        };
        this.loadMovies = this.loadMovies.bind(this);
    }
    componentDidMount() {
        this.loadMovies();
    }
    async loadMovies() {
        let res = await moviedbService.searchMovie({ query: 'Alien' });
        setTimeout(() => {
            this.setState({
                films: res.results,
                isLoading: false,
            })
        }, 3000)
    }
    render() {
        return (
            <MovieView {...this.state}></MovieView>
        );
    }
}
