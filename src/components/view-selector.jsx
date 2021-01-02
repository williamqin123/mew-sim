import React, { Component } from 'react';

class ViewSelector extends Component {

    getDropdownItem(internalName, displayText) {
        return <a data-view-mode={internalName} className={"dropdown-item" + (this.props.activeView === internalName ? ' active' : '')} href="#" onClick={this.props.onChange}>{displayText}</a>;
    }

    render() { 
        return (
            <div className='settings'>
                <span className="dropdown dropup mr-2">
                    <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Switch View
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <h6 className="dropdown-header">Live Views</h6>
                        {this.getDropdownItem('front', 'Front')}
                        {this.getDropdownItem('profile', 'Profile')}
                        {this.getDropdownItem('34', '3/4')}
                        {this.getDropdownItem('low', 'Low Angle')}
                        <div className="dropdown-divider"></div>
                        <h6 className="dropdown-header">Static Views</h6>
                        {this.getDropdownItem('ideal-profile', 'Ideal Profile')}
                    </div>
                </span>
                <button type="button" className={"btn btn-sm btn-outline-primary" + (this.props.overlayEnabled ? ' active' : '')} onClick={this.props.onToggleOverlay}>
                    Overlay
                </button>
            </div>
        );
    }
}
 
export default ViewSelector;