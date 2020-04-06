
import React, { Component } from 'react';

import './LoadingAnimation.scss';

class Loading extends Component {

    render() {
        return (
            <div className="loading-animation" style={this.props.style} >
                <div className="loader"></div>
            </div>
        );
    }

}

export default Loading;