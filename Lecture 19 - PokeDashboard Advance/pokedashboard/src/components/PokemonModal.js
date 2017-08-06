import React from 'react';
import { Button, Modal } from 'react-bootstrap/lib';
import PokemonInfo from './PokemonInfo';

const PokemonModal = React.createClass({
	render() {
		return(
		<div>
			<Button
				bsStyle="primary"
				bsSize="large"
				onClick={this.props.openModal}>
				Launch contained modal
			</Button>

			<Modal
				show={this.props.showModal}
				onHide={this.props.closeModal}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.pokemon !== null ? <PokemonInfo pokemon={this.props.pokemon}/> : null}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.closeModal}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
	}
})

// const PokemonModal = ({toggleModal, showModal, pokemon}) => {
// 	return(
// 		<div>
// 			<Button
// 				bsStyle="primary"
// 				bsSize="large"
// 				onClick={toggleModal}>
// 				Launch contained modal
// 			</Button>

// 			<Modal
// 				show={showModal}
// 				onHide={toggleModal}
// 				container={this}
// 				aria-labelledby="contained-modal-title">
// 				<Modal.Header closeButton>
// 					<Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>
// 					Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
// 				</Modal.Body>
// 				<Modal.Footer>
// 					<Button onClick={toggleModal}>Close</Button>
// 				</Modal.Footer>
// 			</Modal>
// 		</div>
// 	)
// }

export default PokemonModal;