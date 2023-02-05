class ModalSave extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			adapter: "",
			ipAddress: "",
			subnet: "",
			gateway: "",
		};
	}

	// Functions
	checkEmpty(string) {
		// Check if all fields are set
		let counter = 0;
		let empty = false;
		for (let i = 0; i < string.length; i++) {
			if (string[i] != "" && string[i] != ".") {
				counter++;
			}
			if (string[i] == "." && counter == 0) {
				empty = true;
				return true;
			}
			if (string[i] == "." && counter > 0) {
				counter = 0;
			}
			if (i == string.length - 1 && string[i] == ".") {
				return true;
			}
		}
		return false;
	}

	checkData() {
		// Check fields
		let emptyIp = this.checkEmpty(this.props.parentState.ipAddress);
		let emptySubnet = this.checkEmpty(this.props.parentState.subnet);
		let emptyGateway = this.checkEmpty(this.props.parentState.gateway);

		if (
			(this.props.parentState.name != "" &&
				this.props.parentState.adapter != "" &&
				this.props.parentState.ipAddress != "" &&
				emptyIp == false &&
				this.props.parentState.subnet != "" &&
				emptySubnet == false &&
				this.props.parentState.gateway != "" &&
				emptyGateway == false) ||
			(this.props.parentState.DHCP == true && this.props.parentState.name != "" && this.props.parentState.adapter != "")
		) {
			// Save edition item
			if (this.props.edit == "true") {
				saveEditionModal(this.props.parentState);
			}
			// Save new item
			else {
				saveModal(this.props.parentState);
			}
		} else {
			showMessage("All fields are required to save", "alarm");
			setTimeout(hideMessageOnTop, 2000);
		}
	}

	render() {
		return (
			<button className="saveButton" onClick={() => this.checkData()}>
				Save
			</button>
		);
	}
}
