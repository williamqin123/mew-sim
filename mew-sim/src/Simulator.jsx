import React, { Component } from 'react';
import Viewer from './components/viewer';
import MewForceControl from './components/mew-force-control';
import Header from './components/header';
import LoadingScreen from './components/loading-screen';
import InfoBar from './components/info-bar';
import PostureControl from './components/posture-control';
import DailyTimeAllocControl from './components/daily-time-allocation-control';

class Simulator extends Component {

    viewersInit = [
        'front',
        '34',
        'profile',
        'low'
    ]

    FRAME_RANGE = [0, 375];

    IDEAL_CHAD_FRAME = 105;

    initialSimState = {
        currentFrame: 75,
        elapsedDays: 0,
        mewForce: 0,
        mouthBreathingTime: 8,
        mewingTime: 8,
        noseBreathingNoMewingTime: 8,
        postureRating: 10,
        simSpeed: 1
    }

    setSimState(stuffToSet, callback) {
        let newSimState = Object.assign({...this.ss}, stuffToSet);
        this.setState({simState: newSimState}, callback);
    }

    handleMewForceChange = (e) => {
        this.setSimState({
            mewForce: e.currentTarget.value
        });
        this.updateSimControls();
    }

    handlePostureChange = (e) => {
        this.setSimState({
            postureRating: e.currentTarget.value
        });
        this.updateSimControls();
    }

    handleScheduleChange = (render, handle, value, un, percent) => {
        this.setSimState({
            mouthBreathingTime: value[0],
            mewingTime: value[1] - value[0],
            noseBreathingNoMewingTime: 24 - value[1]
        });
        this.updateSimControls();
    }


    viewers = []

    state = {
        percentLoaded: 0,
        simulationRunning: false,
        hasChangedSinceInitial: false,
        simState: {...this.initialSimState},
        animationFrameRequest: null
    }

    updateSimControls() {
        this.simControls = [
            <MewForceControl key='mew-force-control' id='mew-force-control' value={this.ss.mewForce} onChange={this.handleMewForceChange} />,
            <DailyTimeAllocControl key='time-control' id='time-control' value={[this.ss.mouthBreathingTime, this.ss.mewingTime, this.ss.noseBreathingNoMewingTime]} onChange={this.handleScheduleChange} />,
            <PostureControl key='posture-control' id='posture-control' value={this.ss.postureRating} onChange={this.handlePostureChange} />
        ];
    }

    updateLoadingProgress(progress) {
        if (progress >= 1) {
            this.updateViewers();
        }
        this.setState({percentLoaded: progress * 100});
    }

    updateViewers() {
        let viewers = [];
        this.viewersInit.forEach((vm, i) => {
            const id = 'viewer' + i;
            const viewer = <Viewer id={id} key={id} viewMode={vm} currentFrame={this.ss.currentFrame} initialFrameIndex={this.initialSimState.currentFrame} idealChadFrameIndex={this.IDEAL_CHAD_FRAME} />;
            viewers.push(viewer);
        });

        this.viewers = viewers;
    }

    loadImages() {

        let totalImages = 0;
        let numLoaded = 0;

        let tasks = [];
    
        for (const [vmName, vmData] of Object.entries(Viewer.viewModes)) {
            Viewer.viewModes[vmName].images = [];
    
            for (let frameNum = this.FRAME_RANGE[0]; frameNum <= this.FRAME_RANGE[1]; frameNum++) {
                totalImages++;
    
                let img = new Image();

                tasks.push(() => {
                    img.src = `${process.env.PUBLIC_URL}/frames/${vmData.folder}/${frameNum.toString().padStart(4, '0')}.jpg`;
                });
    
                img.onload = () => {
                    numLoaded++;
                    this.updateLoadingProgress(numLoaded / totalImages);
                };
    
                Viewer.viewModes[vmName].images.push(img);
            }
        }

        tasks.forEach((t) => t());
    }

    constructor(props) {
        super(props);
        this.loadImages();
        this.updateSimControls();
    }

    curve(x, exp) {
        return Math.abs(x)**exp * Math.sign(x);
    }

    get ss() {
        return this.state.simState;
    }

    DAYS_PER_MS = 0.02;

    lastUpdate = 0;

    calcMewChange() {
        return (((this.ss.mewForce / 75 + 10) * this.ss.mewingTime -
        this.ss.mouthBreathingTime * 25 -
        this.ss.noseBreathingNoMewingTime * 5 +
        (this.ss.postureRating - 7) * 25) / 1000 - this.curve(this.ss.currentFrame * (this.ss.currentFrame - this.initialSimState.currentFrame) / 10000, 0.75)) / 10;
    }

    scheduleUpdate() {
        this.setState({animationFrameRequest: requestAnimationFrame(this.update)});
    }

    update = () => {

        const RANDOMNESS = 0.0001;
        const randFactor = 1 + Math.random() * RANDOMNESS - RANDOMNESS / 2;

        const time = Date.now();
        const timeDelta = time - this.lastUpdate;

        this.setSimState({
            currentFrame: Math.max(Math.min(this.ss.currentFrame + this.calcMewChange() * randFactor * this.ss.simSpeed, this.FRAME_RANGE[1]), this.FRAME_RANGE[0]),
            elapsedDays: this.ss.elapsedDays + this.ss.simSpeed * timeDelta * this.DAYS_PER_MS
        });

        this.updateViewers();

        if (this.state.simulationRunning) this.scheduleUpdate();

        this.lastUpdate = time;
    }

    handleSpeedChange = (e) => {
        this.setSimState({
            simSpeed: 10**e.currentTarget.value
        });
    }

    startSimulation = () => {
        this.setState({
            simulationRunning: true,  hasChangedSinceInitial: true
        });
        this.lastUpdate = Date.now();
        this.scheduleUpdate();
    }

    stopSimulation = () => {
        this.setState({
            simulationRunning: false
        });
    }

    resetSimulation = () => {
        cancelAnimationFrame(this.state.animationFrameRequest);
        this.setSimState({
            currentFrame: this.initialSimState.currentFrame,
            elapsedDays: this.initialSimState.elapsedDays
        }, () => {
            this.updateViewers();
            this.setState({simulationRunning: false, hasChangedSinceInitial: false});
        });
    }

    render() {
        return <React.Fragment>
            {this.state.percentLoaded >= 100 ? null : <LoadingScreen percentLoaded={this.state.percentLoaded} />}
            <Header simulationChanged={this.state.hasChangedSinceInitial} simulationRunning={this.state.simulationRunning} onRunButtonClick={this.startSimulation} onStopButtonClick={this.stopSimulation} onResetButtonClick={this.resetSimulation} />
            <InfoBar elapsedDays={this.ss.elapsedDays} simSpeed={this.ss.simSpeed} onSpeedChange={this.handleSpeedChange}/>
            <main className='d-flex align-items-stretch justify-content-center'>
                <div id='viewers-pane'>
                    {this.viewers}
                </div>
                <div id='control-pane' className='flex-grow-1 text-center'>
                    <div className='p-4 p-sm-5'>
                        <h2 className='mb-0'>Parameters</h2>
                        <hr />
                        {this.simControls}
                    </div>
                </div>
            </main>
        </React.Fragment>;
    }
}
 
export default Simulator;