import React, { Component } from 'react';

class LoadingScreen extends Component {

    styles = {
        position: 'fixed',
        background: 'var(--cyan)',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 10,
        color: 'white',
        justifyContent: 'space-evenly',
        textAlign: 'center'
    }

    render() {
        return (
            <div id='loading-screen' className='d-flex flex-column align-items-center' style={this.styles}>
                <div></div>
                <div>
                    <h1 className='display-1 mb-3'>MewSim</h1>
                    <p className='lead mb-0'>The Premier Mewing Simulator</p>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: this.props.percentLoaded + '%'}}></div>
                </div>
                <div></div>
            </div>
        );
    }
}
 
export default LoadingScreen;