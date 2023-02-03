class ModalDHCP extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restored: false,
		};
	}

	//Activate checkbox on click
	checkBox() {
		// Edition
		if (this.props.edit == "true" && this.state.restored == false) {
			if (this.props.data == true) {
				$(".checkBox").attr("checked", true);
				this.props.DHCPEnable(false);
			} else {
				$(".checkBox").attr("checked", false);
				this.props.DHCPEnable(true);
			}
			this.setState({ restored: true });
		}
		// New item
		else {
			if ($(".checkBox").is(":checked")) {
				$(".checkBox").attr("checked", false);
				this.props.DHCPEnable(false);
			} else {
				$(".checkBox").attr("checked", true);
				this.props.DHCPEnable(true);
			}
		}
	}

	componentDidMount() {
		if (this.props.edit == "true") {
			this.checkBox();
		}
	}

	render() {
		return (
			<div className="DHCPCheckbox">
				<p>DHCP</p>
				<input type="checkbox" className="checkBox" onClick={() => this.checkBox()}></input>
			</div>
		);
	}
}
