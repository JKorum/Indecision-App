import React from 'react'
import Modal from 'react-modal'

const OptionModal = ({ selectedOption, handleCloseModal}) => (
	<Modal
		isOpen={!!selectedOption}
		appElement={document.getElementById(`app`)}
		onRequestClose={handleCloseModal}
		contentLabel="Selected item"
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Selected item</h3>
		{selectedOption && <p className="modal__body">{selectedOption}</p>}
		<button type="button" onClick={handleCloseModal} className="button">accept!</button>
	</Modal>
)

export default OptionModal