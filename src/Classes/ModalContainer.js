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
			DHCP: false,
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
	DHCPEnable = (newState) => {
		if (newState == true) {
			this.setState({ DHCP: false }, this.callback);
		} else {
			this.setState({ DHCP: true }, this.callback);
		}
	};

	callback() {}

	render() {
		if (this.props.visible == "true") {
			return (
				<div className="modalContainer">
					<ModalHeader setName={this.setName} setAdapter={this.setAdapter} />
					<ModalAddressContainer
						parentState={this.state}
						setAddress={this.setIP}
						name={"IP Address:"}
						disabled={this.DHCP}
					/>
					<ModalAddressContainer
						parentState={this.state}
						setAddress={this.setSubnet}
						name={"Subnet Mask:"}
						disabled={this.DHCP}
					/>
					<ModalAddressContainer
						parentState={this.state}
						setAddress={this.setGateway}
						name={"Default Gateway:"}
						disabled={this.DHCP}
					/>
					<ModalButtons parentState={this.state} DHCPEnable={this.DHCPEnable} />
				</div>
			);
		} else {
			return;
		}
	}
}
