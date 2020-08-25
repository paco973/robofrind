import React from 'react';

const ShearBox = ({shearchfield, sheachChange}) =>{
	return(
			<div className='pa2'>
				<input 
				className='pa3 ba b--green ba-lightest-blue'
				type='shearch' 
				placeholder='shearch robots' 
				onChange={sheachChange}
				/>
			</div>
		)
}

export default ShearBox;