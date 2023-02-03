class ModalAddressGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address1: "",
			address2: "",
			address3: "",
			address4: "",
		};
	}

	//Functions
	setAddress1 = (address) => {
		this.setState({ address1: address }, this.joinAddress);
	};
	setAddress2 = (address) => {
		this.setState({ address2: address }, this.joinAddress);
	};
	setAddress3 = (address) => {
		this.setState({ address3: address }, this.joinAddress);
	};
	setAddress4 = (address) => {
		this.setState({ address4: address }, this.joinAddress);
	};

	joinAddress = () => {
		let fullAddress = "";

		fullAddress = fullAddress.concat(this.state.address1 + ".");
		fullAddress = fullAddress.concat(this.state.address2 + ".");
		fullAddress = fullAddress.concat(this.state.address3 + ".");
		fullAddress = fullAddress.concat(this.state.address4);

		this.props.setAddress(fullAddress);
	};

	render() {
		return (
			<div className="ipAddress">
				<ModalAddressElement
					parentState={this.props.parentState}
					setAddress={this.setAddress1}
					data={this.props.data}
					edit={this.props.edit}
					index="1"
				/>
				<p>.</p>
				<ModalAddressElement
					parentState={this.props.parentState}
					setAddress={this.setAddress2}
					data={this.props.data}
					edit={this.props.edit}
					index="2"
				/>
				<p>.</p>
				<ModalAddressElement
					parentState={this.props.parentState}
					setAddress={this.setAddress3}
					data={this.props.data}
					edit={this.props.edit}
					index="3"
				/>
				<p>.</p>
				<ModalAddressElement
					parentState={this.props.parentState}
					setAddress={this.setAddress4}
					data={this.props.data}
					edit={this.props.edit}
					index="4"
				/>
			</div>
		);
	}
}
