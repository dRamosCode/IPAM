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
<<<<<<< HEAD
			DHCP: false,
=======
			disabled: false,
>>>>>>> e8774459d501f8d8849f8427cc538bd9795f42d9
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
<<<<<<< HEAD
			this.setState({ DHCP: false }, this.callback);
		} else {
			this.setState({ DHCP: true }, this.callback);
=======
			this.setState({ disabled: false }, this.callback);
		} else {
			this.setState({ disabled: true }, this.callback);
>>>>>>> e8774459d501f8d8849f8427cc538bd9795f42d9
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
<<<<<<< HEAD
						disabled={this.DHCP}
=======
						disabled={this.disabled}
>>>>>>> e8774459d501f8d8849f8427cc538bd9795f42d9
					/>
					<ModalAddressContainer
						parentState={this.state}
						setAddress={this.setSubnet}
						name={"Subnet Mask:"}
<<<<<<< HEAD
						disabled={this.DHCP}
=======
						disabled={this.disabled}
>>>>>>> e8774459d501f8d8849f8427cc538bd9795f42d9
					/>
					<ModalAddressContainer
						parentState={this.state}
						setAddress={this.setGateway}
						name={"Default Gateway:"}
<<<<<<< HEAD
						disabled={this.DHCP}
=======
						disabled={this.disabled}
>>>>>>> e8774459d501f8d8849f8427cc538bd9795f42d9
					/>
					<ModalButtons parentState={this.state} DHCPEnable={this.DHCPEnable} />
				</div>
			);
		} else {
			return;
		}
	}
}
