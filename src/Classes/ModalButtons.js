class ModalButtons extends React.Component {
	render() {
		return (
			<div className="buttonsContainer">
				<ModalDHCP parentState={this.props.parentState} DHCPEnable={this.props.DHCPEnable} />
				<ModalCancel />
				<ModalSave parentState={this.props.parentState} />
			</div>
		);
	}
}
