class ModalDHCP extends React.Component {
	constructor(props) {
		super(props);
	}

	//Activate checkbox on click
	checkBox() {
		if ($(".checkBox").is(":checked")) {
			$(".checkBox").attr("checked", false);
			this.props.DHCPEnable(false);
		} else {
			$(".checkBox").attr("checked", true);
			this.props.DHCPEnable(true);
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
