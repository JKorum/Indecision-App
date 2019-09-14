import React from 'react'
import Option from './Option'

const Options = ({ options, handleDeleteOptions, handleDeleteOneOption }) => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your options</h3>
			<button 
				onClick={handleDeleteOptions}
				className="button button--link"
			>
				remove all
			</button>
		</div>
		
		
		{options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
		{
			options.map((option, index) => (	
				<Option 
					key={option} 
					option={option}
					count={index + 1}
					handleDeleteOneOption={handleDeleteOneOption}
				/>
			))
		}			
	</div>
)

export default Options