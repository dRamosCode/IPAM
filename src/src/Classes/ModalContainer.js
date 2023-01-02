class ModalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.setName.bind(this);
		this.setAdapter.bind(this);
		this.setIP.bind(this);
		this.setSubnet.bind(this);
		this.setGateway.bind(this);
		this.state = {
			name: "",
			adapter: "",
			ipAddress: "",
			subnet: "",
			gateway: "",
		};
	}

	// Functions
	setName = (newName) => {
		this.setState({ name: newName }, this.callback);
	};
	setAdapter = (newAdapter) => {
		this.setState({ adapter: newAdapter }, this.callback);
	};
	setIP = (newIP) => {
		this.setState({ ipAddress: newIP }, this.callback);
	};
	setSubnet = (newSubnet) => {
		this.setState({ subnet: newSubnet }, this.callback);
	};
	setGateway = (newGateway) => {
		this.setState({ gateway: newGateway }, this.callback);
	};

	callback() {}

	render() {
		if (this.props.visible == "true") {
			return (
				<div className="modalContainer">
					<ModalHeader setName={this.setName} setAdapter={this.setAdapter} />
					<ModalAddressContainer setAddress={this.setIP} name={"IP Address:"} />
					<ModalAddressContainer setAddress={this.setSubnet} name={"Subnet Mask:"} />
					<ModalAddressContainer setAddress={this.setGateway} name={"Default Gateway:"} />
					<ModalButtons parentState={this.state} />
				</div>
			);
		} else {
			return;
		}
	}
}
