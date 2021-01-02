import React, { Component } from 'react';
import SimControl from './sim-control';

class MewForceControl extends SimControl {

    render() { 
        return (
            <SimControl name='Mewing Force'>
                <div className="input-group mb-3">
                    <div className="input-group-prepend flex-grow-1">
                        <div className="input-group-text">Soft</div>
                        <div className="input-group-text flex-grow-1">
                            <input type='range' className='form-control-range' min='0' max='10000' step='1' value={this.props.value} onChange={this.props.onChange} />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">Hard</div>
                    </div>
                </div>
                Force: {this.props.value} Newtons
            </SimControl>
        )
    }
}
 
export default MewForceControl;