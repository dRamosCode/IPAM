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
	checkData() {
		if (
			(this.props.parentState.name != "" &&
				this.props.parentState.adapter != "" &&
				this.props.parentState.ipAddress != "" &&
				this.props.parentState.ipAddress.length > 6 &&
				this.props.parentState.subnet != "" &&
				this.props.parentState.subnet.length > 6 &&
				this.props.parentState.gateway != "" &&
				this.props.parentState.gateway.length > 6) ||
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
