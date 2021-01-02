import React, { Component } from 'react';

class InfoBar extends Component {

    parseDaysToYearsAndDays(value) {
        var years, days;
        
        years = value >= 365 ? Math.floor(value / 365) : 0;
        days = years ? value - (years*365) : value;

        return (years > 0 ? `${years} years, ` : '') + days + ' days';
    }

    render() { 
        return (
            <div className="navbar navbar-light bg-light border-bottom justify-content-between" id='info-bar'>
                <strong className='bigger-text-if-big-window'>Elapsed Time: {this.parseDaysToYearsAndDays(Math.round(this.props.elapsedDays))}</strong>
                <div>
                    <label className='mb-1'>Sim Speed: <strong>{this.props.simSpeed.toFixed(2)}</strong>x</label>
                    <input type='range' className='form-control-range' min='-1' max='1' step='any' value={Math.log10(this.props.simSpeed)} onChange={this.props.onSpeedChange} />
                </div>
            </div>
        );
    }
}
 
export default InfoBar;