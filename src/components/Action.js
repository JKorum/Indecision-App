import React from 'react'

const Action = ({ handlePick, hasOptions }) => (
	<div>
		<button 
			className="big-button"
			onClick={handlePick} 
			disabled={!hasOptions}
		>
			what should I do?
		</button>
	</div>
)

export default Action 