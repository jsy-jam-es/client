import React, { Component } from 'react';

class WaitingScreen extends Component {
    render() {
        return (
            <div className="WaitingScreen">
                Hold on <strong>{this.props.name}</strong>, it's about to go down
            </div>
        );
    }
}

export default WaitingScreen;
