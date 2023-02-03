class ModalHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="headerContainer">
				<ModalName setName={this.props.setName} data={this.props.data} edit={this.props.edit} />
				<ModalAdapter
					setAdapter={this.props.setAdapter}
					adapterList={adapters}
					data={this.props.data}
					edit={this.props.edit}
				/>
			</div>
		);
	}
}
