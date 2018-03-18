import React from 'react';

export default function Output(props) {

	return (
		<div className="form-group">
			<label></label>	
			<output>
				{props.text}
				{props.value}
			</output>
		</div>
	);	
}



