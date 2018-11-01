import React, { Component } from 'react';
import { MovieCard } from './movieCard';
import { WithLoaderComponent } from './withLoader';

const view = ({ films }) => (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
            films.map(film => (
                <div key={film.id} style={{ padding: "5px" }}>
                    <MovieCard {...film} />
                </div>)
            )
        }
    </div>
);

export const MovieView = WithLoaderComponent()(view)

// @WithLoaderComponent()
// export class MovieView extends Component {

// }
