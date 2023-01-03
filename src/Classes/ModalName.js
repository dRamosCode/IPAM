class ModalName extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: "",
		};
	}

	//Functions
	handleChange(event) {
		this.setState({ value: event.target.value });
		this.props.setName(event.target.value);
	}

	render() {
		// Empty field
		if (this.state.value == "") {
			return (
				<input
					className="name empty"
					type="text"
					placeholder="Name..."
					value={this.state.value}
					onChange={this.handleChange}
				/>
			);
		}
		// Field with data
		else {
			return (
				<input
					className="name"
					type="text"
					placeholder="Name..."
					value={this.state.value}
					onChange={this.handleChange}
				/>
			);
		}
	}
}
