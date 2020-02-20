import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import data from './data';

const LineChart = () => {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<ResponsiveLine
				areaBaselineValue={0}
				areaBlendMode='darken'
				areaOpacity={1}
				axisBottom={null}
				axisLeft={null}
				axisRight={null}
				axisTop={null}
				borderColor="transparent"
				colors={d => d.color}
				data={data}
				enableArea={true}
				enableCrosshair={false}
				enableGridX={false}
				enableGridY={false}
				enablePoints={false}
				margin={{ top: 50, right: 110, bottom: 100, left: 110 }}
				useMesh={false}
				xScale={{ type: 'point' }}
				yScale={{
					type: 'linear',
					min: 'auto',
					max: 'auto',
					stacked: false,
					reverse: false,
				}}
			/>
		</div>
	);
};

export default LineChart;
