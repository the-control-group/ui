import React from 'react';

export function generatePropTable(arr) {
	const props = arr.map((propArr, i) => <tr key={i}>{propArr.map((prop, j) => <td key={j}>{prop}</td>)}</tr>);

	return (
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
				{props}
			</tbody>
		</table>
	);
}
