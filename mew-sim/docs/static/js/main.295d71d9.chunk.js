(this["webpackJsonpmew-sim"]=this["webpackJsonpmew-sim"]||[]).push([[0],{22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),r=n(8),o=n.n(r),c=(n(16),n(17),n(18),n(22),n(3)),l=n(2),u=n(5),d=n(4),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"card shadow mb-3",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{className:"mb-0",children:this.props.name}),Object(a.jsx)("hr",{}),this.props.children]})})}}]),n}(i.Component),m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(h,{name:"Mewing Force",children:[Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsxs)("div",{className:"input-group-prepend flex-grow-1",children:[Object(a.jsx)("div",{className:"input-group-text",children:"Soft"}),Object(a.jsx)("div",{className:"input-group-text flex-grow-1",children:Object(a.jsx)("input",{type:"range",className:"form-control-range",min:"0",max:"10000",step:"1",value:this.props.value,onChange:this.props.onChange})})]}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("div",{className:"input-group-text",children:"Hard"})})]}),"Force: ",this.props.value," Newtons"]})}}]),n}(h),p=n(10),j=n(7),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).styles={fontSize:0},a.ref=s.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentDidMount",value:function(){this.paint()}},{key:"paint",value:function(){this.drawImage(this.ref.current.getContext("2d"))}},{key:"drawImage",value:function(e){e.drawImage(this.props.frameToPaint,0,0),this.props.overlayEnabled&&(e.globalAlpha=.5,e.drawImage(this.props.overlay,0,0),e.globalAlpha=1)}},{key:"render",value:function(){return Object(a.jsx)("canvas",{ref:this.ref,style:this.styles,className:"viewer-canvas",width:n.resolution[0],height:n.resolution[1]})}}]),n}(i.Component);b.resolution=[512,512];var g=b,v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"getDropdownItem",value:function(e,t){return Object(a.jsx)("a",{"data-view-mode":e,className:"dropdown-item"+(this.props.activeView===e?" active":""),href:"#",onClick:this.props.onChange,children:t})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"settings",children:[Object(a.jsxs)("span",{className:"dropdown dropup mr-2",children:[Object(a.jsx)("button",{className:"btn btn-sm btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Switch View"}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(a.jsx)("h6",{className:"dropdown-header",children:"Live Views"}),this.getDropdownItem("front","Front"),this.getDropdownItem("profile","Profile"),this.getDropdownItem("34","3/4"),this.getDropdownItem("low","Low Angle"),Object(a.jsx)("div",{className:"dropdown-divider"}),Object(a.jsx)("h6",{className:"dropdown-header",children:"Static Views"}),this.getDropdownItem("ideal-profile","Ideal Profile")]})]}),Object(a.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-primary"+(this.props.overlayEnabled?" active":""),onClick:this.props.onToggleOverlay,children:"Overlay"})]})}}]),n}(i.Component),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={viewData:null,viewName:null,overlayEnabled:!1},a}return Object(l.a)(n,[{key:"setView",value:function(e){this.setState({viewData:n.viewModes[e],viewName:e})}},{key:"componentWillMount",value:function(){this.setView(this.props.viewMode)}},{key:"handleViewChange",value:function(e){this.setView(e.target.dataset.viewMode)}},{key:"handleOverlaySwitch",value:function(e){this.setState({overlayEnabled:!this.state.overlayEnabled})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"viewer",children:[Object(a.jsx)(g,{frameToPaint:this.state.viewData.images[Math.round(this.state.viewData.getCurrentFrame(this))],overlay:this.state.viewData.images[Math.round(this.props.initialFrameIndex)],overlayEnabled:this.state.overlayEnabled}),Object(a.jsx)(v,{activeView:this.state.viewName,onChange:function(t){e.handleViewChange(t)},overlayEnabled:this.state.overlayEnabled,onToggleOverlay:function(t){e.handleOverlaySwitch(t)}})]})}}]),n}(i.Component);f.viewModes={front:{folder:"front",getCurrentFrame:function(e){return e.props.currentFrame}},profile:{folder:"profile",getCurrentFrame:function(e){return e.props.currentFrame}},34:{folder:"34",getCurrentFrame:function(e){return e.props.currentFrame}},low:{folder:"low",getCurrentFrame:function(e){return e.props.currentFrame}},"original-profile":{folder:"profile",getCurrentFrame:function(e){return e.props.initialFrameIndex}},"ideal-profile":{folder:"profile",getCurrentFrame:function(e){return e.props.idealChadFrameIndex}}};var O=f,w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"getPrimaryButton",value:function(){return this.props.simulationRunning?Object(a.jsx)("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.props.onStopButtonClick,children:"Stop Simulation"}):Object(a.jsx)("button",{className:"btn btn-success mr-2",type:"button",onClick:this.props.onRunButtonClick,children:"Start Simulation"})}},{key:"render",value:function(){return Object(a.jsxs)("header",{className:"navbar navbar-light bg-light justify-content-between border-bottom shadow-sm",children:[Object(a.jsx)("h1",{className:"navbar-brand h1 mb-0",children:Object(a.jsx)("span",{className:"bigger-text-if-big-window",children:"MewSim"})}),Object(a.jsxs)("span",{children:[this.getPrimaryButton(),Object(a.jsx)("button",{className:"btn btn-".concat(this.props.simulationChanged?"":"outline-","secondary"),type:"button",disabled:!this.props.simulationChanged,onClick:this.props.onResetButtonClick,children:"Reset Simulation"})]})]})}}]),n}(i.Component),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).styles={position:"fixed",background:"var(--cyan)",top:0,left:0,bottom:0,right:0,zIndex:10,color:"white",justifyContent:"space-evenly",textAlign:"center"},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"loading-screen",className:"d-flex flex-column align-items-center",style:this.styles,children:[Object(a.jsx)("div",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"display-1 mb-3",children:"MewSim"}),Object(a.jsx)("p",{className:"lead mb-0",children:"The Premier Mewing Simulator"})]}),Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated bg-warning",role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100",style:{width:this.props.percentLoaded+"%"}})}),Object(a.jsx)("div",{})]})}}]),n}(i.Component),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"parseDaysToYearsAndDays",value:function(e){var t,n;return n=(t=e>=365?Math.floor(e/365):0)?e-365*t:e,(t>0?"".concat(t," years, "):"")+n+" days"}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"navbar navbar-light bg-light border-bottom justify-content-between",id:"info-bar",children:[Object(a.jsxs)("strong",{className:"bigger-text-if-big-window",children:["Elapsed Time: ",this.parseDaysToYearsAndDays(Math.round(this.props.elapsedDays))]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{className:"mb-1",children:["Sim Speed: ",Object(a.jsx)("strong",{children:this.props.simSpeed.toFixed(2)}),"x"]}),Object(a.jsx)("input",{type:"range",className:"form-control-range",min:"-1",max:"1",step:"any",value:Math.log10(this.props.simSpeed),onChange:this.props.onSpeedChange})]})]})}}]),n}(i.Component),S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(h,{name:"Head Posture",children:Object(a.jsxs)("div",{className:"input-group mb-0",children:[Object(a.jsxs)("div",{className:"input-group-prepend flex-grow-1",children:[Object(a.jsx)("div",{className:"input-group-text",children:"Forward"}),Object(a.jsx)("div",{className:"input-group-text flex-grow-1",children:Object(a.jsx)("input",{type:"range",className:"form-control-range",min:"0",max:"10",step:"any",value:this.props.value,onChange:this.props.onChange})})]}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("div",{className:"input-group-text",children:"Chintuck"})})]})})}}]),n}(h),C=n(9),N=n.n(C),F=(n(24),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(h,{name:"Daily Time Allocation",children:[Object(a.jsx)("div",{id:"range-slider",className:"mb-2",children:Object(a.jsx)(N.a,{id:"time-ranges",start:[8,16],connect:[!0,!0,!0],orientation:"horizontal",range:{min:0,max:24},onSlide:this.props.onChange},"time-ranges")}),Object(a.jsxs)("div",{className:"row bigger-text-if-big-window",children:[Object(a.jsx)("div",{className:"col text-danger",children:Object(a.jsxs)("small",{children:[Object(a.jsx)("h6",{children:"Mouth-Breathing"}),this.props.value[0].toFixed(1)," hours"]})}),Object(a.jsx)("div",{className:"col text-success",children:Object(a.jsxs)("small",{children:[Object(a.jsx)("h6",{children:"Mewing"}),this.props.value[1].toFixed(1)," hours"]})}),Object(a.jsx)("div",{className:"col text-secondary",children:Object(a.jsxs)("small",{children:[Object(a.jsx)("h6",{children:"Nose-Breathing, Not Mewing"}),this.props.value[2].toFixed(1)," hours"]})})]})]})}}]),n}(h)),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).viewersInit=["front","34","profile","low"],a.FRAME_RANGE=[0,375],a.IDEAL_CHAD_FRAME=105,a.initialSimState={currentFrame:75,elapsedDays:0,mewForce:0,mouthBreathingTime:8,mewingTime:8,noseBreathingNoMewingTime:8,postureRating:10,simSpeed:1},a.handleMewForceChange=function(e){a.setSimState({mewForce:e.currentTarget.value}),a.updateSimControls()},a.handlePostureChange=function(e){a.setSimState({postureRating:e.currentTarget.value}),a.updateSimControls()},a.handleScheduleChange=function(e,t,n,i,s){a.setSimState({mouthBreathingTime:n[0],mewingTime:n[1]-n[0],noseBreathingNoMewingTime:24-n[1]}),a.updateSimControls()},a.viewers=[],a.state={percentLoaded:0,simulationRunning:!1,hasChangedSinceInitial:!1,simState:Object(j.a)({},a.initialSimState),animationFrameRequest:null},a.DAYS_PER_MS=.02,a.lastUpdate=0,a.update=function(){var e=1e-4,t=1+Math.random()*e-5e-5,n=Date.now(),i=n-a.lastUpdate;a.setSimState({currentFrame:Math.max(Math.min(a.ss.currentFrame+a.calcMewChange()*t*a.ss.simSpeed,a.FRAME_RANGE[1]),a.FRAME_RANGE[0]),elapsedDays:a.ss.elapsedDays+a.ss.simSpeed*i*a.DAYS_PER_MS}),a.updateViewers(),a.state.simulationRunning&&a.scheduleUpdate(),a.lastUpdate=n},a.handleSpeedChange=function(e){a.setSimState({simSpeed:Math.pow(10,e.currentTarget.value)})},a.startSimulation=function(){a.setState({simulationRunning:!0,hasChangedSinceInitial:!0}),a.lastUpdate=Date.now(),a.scheduleUpdate()},a.stopSimulation=function(){a.setState({simulationRunning:!1})},a.resetSimulation=function(){cancelAnimationFrame(a.state.animationFrameRequest),a.setSimState({currentFrame:a.initialSimState.currentFrame,elapsedDays:a.initialSimState.elapsedDays},(function(){a.updateViewers(),a.setState({simulationRunning:!1,hasChangedSinceInitial:!1})}))},a.loadImages(),a.updateSimControls(),a}return Object(l.a)(n,[{key:"setSimState",value:function(e,t){var n=Object.assign(Object(j.a)({},this.ss),e);this.setState({simState:n},t)}},{key:"updateSimControls",value:function(){this.simControls=[Object(a.jsx)(m,{id:"mew-force-control",value:this.ss.mewForce,onChange:this.handleMewForceChange},"mew-force-control"),Object(a.jsx)(F,{id:"time-control",value:[this.ss.mouthBreathingTime,this.ss.mewingTime,this.ss.noseBreathingNoMewingTime],onChange:this.handleScheduleChange},"time-control"),Object(a.jsx)(S,{id:"posture-control",value:this.ss.postureRating,onChange:this.handlePostureChange},"posture-control")]}},{key:"updateLoadingProgress",value:function(e){e>=1&&this.updateViewers(),this.setState({percentLoaded:100*e})}},{key:"updateViewers",value:function(){var e=this,t=[];this.viewersInit.forEach((function(n,i){var s="viewer"+i,r=Object(a.jsx)(O,{id:s,viewMode:n,currentFrame:e.ss.currentFrame,initialFrameIndex:e.initialSimState.currentFrame,idealChadFrameIndex:e.IDEAL_CHAD_FRAME},s);t.push(r)})),this.viewers=t}},{key:"loadImages",value:function(){for(var e=this,t=0,n=0,a=[],i=function(){var i=Object(p.a)(r[s],2),o=i[0],c=i[1];O.viewModes[o].images=[];for(var l=function(i){t++;var s=new Image;a.push((function(){s.src="".concat("","/frames/").concat(c.folder,"/").concat(i.toString().padStart(4,"0"),".jpg")})),s.onload=function(){n++,e.updateLoadingProgress(n/t)},O.viewModes[o].images.push(s)},u=e.FRAME_RANGE[0];u<=e.FRAME_RANGE[1];u++)l(u)},s=0,r=Object.entries(O.viewModes);s<r.length;s++)i();a.forEach((function(e){return e()}))}}]),Object(l.a)(n,[{key:"curve",value:function(e,t){return Math.pow(Math.abs(e),t)*Math.sign(e)}},{key:"calcMewChange",value:function(){return(((this.ss.mewForce/75+10)*this.ss.mewingTime-25*this.ss.mouthBreathingTime-5*this.ss.noseBreathingNoMewingTime+25*(this.ss.postureRating-7))/1e3-this.curve(this.ss.currentFrame*(this.ss.currentFrame-this.initialSimState.currentFrame)/1e4,.75))/10}},{key:"scheduleUpdate",value:function(){this.setState({animationFrameRequest:requestAnimationFrame(this.update)})}},{key:"render",value:function(){return Object(a.jsxs)(s.a.Fragment,{children:[this.state.percentLoaded>=100?null:Object(a.jsx)(x,{percentLoaded:this.state.percentLoaded}),Object(a.jsx)(w,{simulationChanged:this.state.hasChangedSinceInitial,simulationRunning:this.state.simulationRunning,onRunButtonClick:this.startSimulation,onStopButtonClick:this.stopSimulation,onResetButtonClick:this.resetSimulation}),Object(a.jsx)(y,{elapsedDays:this.ss.elapsedDays,simSpeed:this.ss.simSpeed,onSpeedChange:this.handleSpeedChange}),Object(a.jsxs)("main",{className:"d-flex align-items-stretch justify-content-center",children:[Object(a.jsx)("div",{id:"viewers-pane",children:this.viewers}),Object(a.jsx)("div",{id:"control-pane",className:"flex-grow-1 text-center",children:Object(a.jsxs)("div",{className:"p-4 p-sm-5",children:[Object(a.jsx)("h2",{className:"mb-0",children:"Parameters"}),Object(a.jsx)("hr",{}),this.simControls]})})]})]})}},{key:"ss",get:function(){return this.state.simState}}]),n}(i.Component),k=Object(a.jsx)(M,{});o.a.render(k,document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.295d71d9.chunk.js.map