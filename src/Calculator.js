import React, {Component} from 'react';
import PositiveNumberInput from './PositiveNumberInput'
import unboxThen from './unboxThen'
import './App.css';

class Calculator extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			a: '',
			b: '',
			operationName: '+'
		}

		this.operations = {
			'+': (a, b) => a + b,
			'-': (a, b) => a - b,
			'x': (a, b) => a * b,
			'/': (a, b) => a / b,
		}
	}

	updateField = field => value => {
		console.log('UPDATE FIELD');
		this.setState({
			[field]: value,
			result: undefined,
		});
	}

	calculate = () => {
		const {
			state: {
				a,
				b,
				operationName,
			},
			operations,
		} = this;

		const operation = operations[operationName];
		const result = operation(+a, +b);

		this.setState({result});
	}

	render() {

		const {
			state: {
				a,
				b,
				operationName,
				result,
			},
			updateField,
			calculate,
			operations,
		} = this;

		console.log('STATE', this.state);

		const shouldShowButton = 
			a !== '' &&
			b !== '' && 
			!result;

		return (
			<div className='calculator'>
				<PositiveNumberInput
					value={a}
					onChange={updateField('a')}/>

				<select 
					value={operationName}
					onChange={unboxThen(updateField('operationName'))}>
					{Object.keys(operations).map(operationName => 
						<option 
							value={operationName}
							children={operationName}
							key={operationName}/>
					)}
				</select>

				<PositiveNumberInput
					value={b}
					onChange={updateField('b')}/>

				{shouldShowButton &&
					<button
						onClick={calculate}
						children='calculate'/>
				}

				{result &&
					<span>{result}</span>
				}

			</div>
		);
	}
}

export default Calculator;
