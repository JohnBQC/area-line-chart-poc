import React from 'react';
import { hot } from 'react-hot-loader';
import { LineChart } from './components';

const App = () => {
	return (
		<div>
			<LineChart />
		</div>
	);
};

declare const module: any;
export default hot(module)(App);
