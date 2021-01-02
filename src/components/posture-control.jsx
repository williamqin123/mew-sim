import React, { Component } from 'react';
import SimControl from './sim-control';

class PostureControl extends SimControl {

    render() { 
        return (
            <SimControl name='Head Posture'>
                <div className="input-group mb-0">
                    <div className="input-group-prepend flex-grow-1">
                        <div className="input-group-text">Forward</div>
                        <div className="input-group-text flex-grow-1">
                            <input type='range' className='form-control-range' min='0' max='10' step='any' value={this.props.value} onChange={this.props.onChange} />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">Chintuck</div>
                    </div>
                </div>
            </SimControl>
        )
    }
}
 
export default PostureControl;