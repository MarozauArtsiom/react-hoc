import React, { Component } from 'react';

const imageHost = 'https://image.tmdb.org/t/p/w500';

export class MovieCard extends Component {
    render() {
        const { title, backdrop_path } = this.props;
        return (
            <div>
                <div>
                    {title}
                </div>
                <div>
                    <img
                        style={{ width: "120px", height: "120px" }}
                        src={`${imageHost}${backdrop_path}`}
                        title="image"
                        alt={title}
                    ></img>
                </div>
            </div>
        );
    }
}
