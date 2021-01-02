import React, { Component } from 'react';
import SimControl from './sim-control';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class DailyTimeAllocControl extends SimControl {

    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <SimControl name='Daily Time Allocation'>
                <div id='range-slider' className='mb-2'>
                    <Nouislider
                        key='time-ranges'
                        id='time-ranges'
                        start={[8, 16]}
                        connect={[true, true, true]}
                        orientation="horizontal"
                        range={{
                            min: 0,
                            max: 24
                        }}
                        onSlide={this.props.onChange}
                    />
                </div>
                <div className='row bigger-text-if-big-window'>
                    <div className='col text-danger'>
                        <small>
                            <h6>Mouth-Breathing</h6>
                            {this.props.value[0].toFixed(1)} hours
                        </small>
                    </div>
                    <div className='col text-success'>
                        <small>
                            <h6>Mewing</h6>
                            {this.props.value[1].toFixed(1)} hours
                        </small>
                    </div>
                    <div className='col text-secondary'>
                        <small>
                            <h6>Nose-Breathing, Not Mewing</h6>
                            {this.props.value[2].toFixed(1)} hours
                        </small>
                    </div>
                </div>
            </SimControl>
        )
    }
}
 
export default DailyTimeAllocControl;