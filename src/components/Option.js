import React from 'react'

const Option = ({ option, count, handleDeleteOneOption}) => (
	<div className="option">
		<p className="option__text">{count}. {option}</p>
		<button 
			type="button" 
			onClick={(e) => handleDeleteOneOption(option)}
			className="button button--link"
		>
			remove
		</button>
	</div>
)
	
export default Option