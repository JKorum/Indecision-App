import React from 'react'

import AddOption from './AddOption' 
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props)
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
		this.handlePick = this.handlePick.bind(this)
		this.handleAddOption = this.handleAddOption.bind(this)
		this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
		this.state = {
			options: [],
			selectedOption: undefined
		}
	}

	componentDidMount() {		
		const json = localStorage.getItem(`options`)
		const options = JSON.parse(json)
		if(options !== null && options.length !== 0) {
			this.setState(() => ({ options }))
		}				
	}

	componentDidUpdate(prevProps, prevState) {			
		if (prevState.options.length !== this.state.options.length) {			
			const json = JSON.stringify(this.state.options)
			localStorage.setItem(`options`, json)
		}		
	}

	handleAddOption(option) {
		if(!option) {
			return `You should provide a valid option`
		} else if(this.state.options.indexOf(option) > -1) {
			return `This option already exists`
		}

		this.setState((prevState) => ({ options: [...prevState.options, option] }))		
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }))
	}

	handleDeleteOneOption(option) {		
		this.setState((prevState) => ({
			options: prevState.options.filter(item => item !== option)
		}))		
	}

	handlePick() {
		const random = Math.floor(Math.random() * this.state.options.length)
		this.setState(() => ({ selectedOption: this.state.options[random] }))
	}

	handleCloseModal() {
		this.setState(() => ({ selectedOption: undefined }))
	}

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<Action 
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<Options 
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOneOption={this.handleDeleteOneOption}
						/>
						<AddOption 
							handleAddOption={this.handleAddOption}
						/>
					</div>					
				</div>				
				<OptionModal 
					selectedOption={this.state.selectedOption}
					handleCloseModal={this.handleCloseModal}
				/>
			</div>
		)		
	}
}

export default IndecisionApp