import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    getPrimaryButton() {
        if (this.props.simulationRunning) {
            return <button className="btn btn-danger mr-2" type="button" onClick={this.props.onStopButtonClick}>Stop Simulation</button>;
        }
        return <button className="btn btn-success mr-2" type="button" onClick={this.props.onRunButtonClick}>Start Simulation</button>;
    }

    render() { 
        return (
            <header className="navbar navbar-light bg-light justify-content-between border-bottom shadow-sm">
                <h1 className="navbar-brand h1 mb-0">
                    <span className='bigger-text-if-big-window'>
                        MewSim
                    </span>
                </h1>
                <span>
                    {this.getPrimaryButton()}
                    <button className={`btn btn-${this.props.simulationChanged ? '' : 'outline-'}secondary`} type="button" disabled={!this.props.simulationChanged} onClick={this.props.onResetButtonClick}>Reset Simulation</button>
                </span>
            </header>
        );
    }
}
 
export default Header;