class ModalAddressContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ipAddressContainer">
				<p>{this.props.name}</p>
				<ModalAddressGroup setAddress={this.props.setAddress} />
			</div>
		);
	}
}
