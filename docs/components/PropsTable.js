import React from 'react';
import PropTypes from 'prop-types';

const PropsTable = (props) => (
	<table>
		<thead>
			<tr>
				<td>propName</td>
				<td>propType</td>
				<td>defaultValue</td>
				<td>isRequired</td>
				<td>description</td>
			</tr>
		</thead>
		<tbody>
			{props.propsData.map((propsArr, i) => <tr key={i}>{propsArr.map((prop, j) => <td key={j}>{prop}</td>)}</tr>)}
		</tbody>
	</table>
);

PropsTable.propTypes = {
	propsData: PropTypes.array.isRequired
};

export default PropsTable;
