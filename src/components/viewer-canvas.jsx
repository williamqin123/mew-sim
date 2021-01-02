import React, { Component } from 'react';

class ViewerCanvas extends Component {

    static resolution = [512, 512];

    styles = {
        fontSize: 0
    }

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidUpdate() {
        this.paint();
    }

    componentDidMount() {
        this.paint();
    }

    paint() {
        this.drawImage(this.ref.current.getContext("2d"));
    }

    drawImage(ctx) {
        ctx.drawImage(this.props.frameToPaint, 0, 0);

        if (this.props.overlayEnabled) {
            ctx.globalAlpha = 0.5;
            ctx.drawImage(this.props.overlay, 0, 0);
            ctx.globalAlpha = 1;
        }
    }
  
    render() {
        return <canvas ref={this.ref} style={this.styles} className='viewer-canvas' width={ViewerCanvas.resolution[0]} height={ViewerCanvas.resolution[1]}></canvas>
    }
}

export default ViewerCanvas;