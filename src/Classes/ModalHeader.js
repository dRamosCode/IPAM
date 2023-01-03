class ModalHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="headerContainer">
				<ModalName setName={this.props.setName} />
				<ModalAdapter setAdapter={this.props.setAdapter} adapterList={adapters} />
			</div>
		);
	}
}
