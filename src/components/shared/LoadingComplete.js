import React, { Component } from 'react';

class LoadingComplete extends Component {
    render() {
        return (
            <div className="loader">
                <h1>LOADING</h1>
                <span/>
                <span/>
                <span/>
            </div>
        );
    }
}

LoadingComplete.defaultProps = {};

export default LoadingComplete;
