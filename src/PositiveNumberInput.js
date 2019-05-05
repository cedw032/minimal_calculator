import React from 'react';

const PositiveNumberInput = ({value, onChange}) =>
	<input 
		type='text'
		value={value}
		onChange={({target: {value}}) => {

			if (value === '') {
				onChange('');
				return;
			}

			if (isNaN(+value)) {
				return;
			}

			onChange(value);
		}}/>

export default PositiveNumberInput;