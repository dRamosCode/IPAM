class ModalButtons extends React.Component {
	render() {
		return (
			<div className="buttonsContainer">
				<ModalDHCP
					parentState={this.props.parentState}
					DHCPEnable={this.props.DHCPEnable}
					data={this.props.data}
					edit={this.props.edit}
				/>
				<ModalCancel />
				<ModalSave parentState={this.props.parentState} edit={this.props.edit} />
			</div>
		);
	}
}
