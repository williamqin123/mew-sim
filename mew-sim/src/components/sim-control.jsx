import React, { Component } from 'react';

class SimControl extends Component {

    render() {
        return (
            <div className="card shadow mb-3">
                <div className="card-body">
                    <h3 className='mb-0'>{this.props.name}</h3>
                    <hr />
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default SimControl;