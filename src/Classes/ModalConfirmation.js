class ModalConfirmation extends React.Component {
	constructor(props) {
		super(props);
	}

	// Functions

	// Render
	render() {
		// Hide modal
		if (this.props.message == "hide") {
			return;
		}
		// Show modal
		else {
			// Delete element
			return (
				<div className="modalConfirmation shadow">
					<p>{this.props.message}</p>
					<div>
						<button className="neutral" onClick={hideConfirmation}>
							{this.props.btn1}
						</button>
						<button className="alarm" onClick={() => deleteElement(this.props.element)}>
							{this.props.btn2}
						</button>
					</div>
				</div>
			);
		}
	}
}
