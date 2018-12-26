/**
 * app
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './Application';
import './app.css';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = (Component: React.FunctionComponent) => {
	ReactDOM.render(
		<Component />,
		mainElement
	);
};

render(Application);

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
	module.hot.accept('./Application', () => {
		import('./Application').then(World => {
			render(World.default);
		});
	});
}
