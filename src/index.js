import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import './index.scss';

import MewForceControl from './components/mew-force-control';
import Simulator from './Simulator';
import Viewer from './components/viewer';

const app = <Simulator />;

ReactDOM.render(app, document.getElementById('root'));
