import React, { Component } from 'react';
import ViewerCanvas from './viewer-canvas';
import ViewSelector from './view-selector';
import Simulator from '../Simulator';

class Viewer extends Component {

    static viewModes = {
        'front': {
            folder: 'front',
            getCurrentFrame: (viewer) => { return viewer.props.currentFrame }
        },
        'profile' : {
            folder: 'profile',
            getCurrentFrame: (viewer) => { return viewer.props.currentFrame }
        },
        '34': {
            folder: '34',
            getCurrentFrame: (viewer) => { return viewer.props.currentFrame }
        },
        'low': {
            folder: 'low',
            getCurrentFrame: (viewer) => { return viewer.props.currentFrame }
        },
        'original-profile': {
            folder: 'profile',
            getCurrentFrame: (viewer) => { return viewer.props.initialFrameIndex }
        },
        'ideal-profile': {
            folder: 'profile',
            getCurrentFrame: (viewer) => { return viewer.props.idealChadFrameIndex }
        }
    };

    state = {
        viewData: null,
        viewName: null,
        overlayEnabled: false
    }

    constructor(props) {
        super(props);
    }

    setView(viewName) {
        this.setState({
            viewData: Viewer.viewModes[viewName],
            viewName: viewName
        });
    }

    componentWillMount() {
        this.setView(this.props.viewMode);
    }

    handleViewChange(e) {
        this.setView(e.target.dataset.viewMode);
    }

    handleOverlaySwitch(e) {
        this.setState({overlayEnabled: !this.state.overlayEnabled});
    }

    render() {
        return (
            <div className='viewer'>
                <ViewerCanvas frameToPaint={this.state.viewData.images[Math.round(this.state.viewData.getCurrentFrame(this))]} overlay={this.state.viewData.images[Math.round(this.props.initialFrameIndex)]} overlayEnabled={this.state.overlayEnabled} />
                <ViewSelector activeView={this.state.viewName} onChange={(e) => {this.handleViewChange(e)}} overlayEnabled={this.state.overlayEnabled} onToggleOverlay={(e) => {this.handleOverlaySwitch(e)}}/>
            </div>
        );
    }
}
 
export default Viewer;