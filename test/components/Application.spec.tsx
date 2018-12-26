import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Application from '../../src/Application';

describe('Application', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<Application />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
