class ModalMessage extends React.Component {
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
			return <div className={`modalMessage shadow ${this.props.color}`}>{this.props.message}</div>;
		}
	}
}
