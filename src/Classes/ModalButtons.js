class ModalButtons extends React.Component {
	render() {
		return (
			<div className="buttonsContainer">
				<ModalCancel />
				<ModalSave parentState={this.props.parentState} />
			</div>
		);
	}
}
