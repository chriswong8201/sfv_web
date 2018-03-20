import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, worldssss!');
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
