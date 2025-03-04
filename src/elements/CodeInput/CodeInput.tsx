/**
 * Code Input
 */

import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const CodeInput = ({
	type,
	characterLength,
	...other
}) => {
	const combinedClasses = classNames(
			'ui-code-input',
			other.classes
		),
		inputWidth = 50 * (characterLength || 6);

	return (
		<div
			className={combinedClasses}
			style={{width: inputWidth}}
		>
			<div className="code-input-wrapper">
				<Common
					{...other}
					tag="input"
					type={type}
					maxLength={characterLength}
					style={{width: inputWidth + 10, minWidth: inputWidth + 10}}
					autoFocus
				/>
			</div>
		</div>
	);
};

export default CodeInput;

