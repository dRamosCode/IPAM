class ModalAddressContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ipAddressContainer">
				<p>{this.props.name}</p>
				<ModalAddressGroup parentState={this.props.parentState} setAddress={this.props.setAddress} />
			</div>
		);
	}
}
