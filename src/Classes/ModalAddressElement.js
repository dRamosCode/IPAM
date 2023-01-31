class ModalAddressElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value }, this.callback);
	}
	callback() {
		this.props.setAddress(this.state.value);
	}

	render() {
		if (this.props.parentState.disabled == false) {
			if (this.state.value == "") {
				return (
					<input
						className="ipElement empty"
						type="text"
						placeholder=""
						maxLength="3"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				);
			} else {
				return (
					<input
						className="ipElement"
						type="text"
						placeholder=""
						maxLength="3"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				);
			}
		} else {
			return (
				<input
					className="ipElement disabled"
					type="text"
					placeholder=""
					maxLength="0"
					value=""
					onChange={this.handleChange}
				/>
			);
		}
	}
}
