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
<<<<<<< HEAD
		if (this.props.parentState.DHCP == false) {
=======
		if (this.props.parentState.disabled == false) {
>>>>>>> e8774459d501f8d8849f8427cc538bd9795f42d9
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
					tabIndex="-1"
				/>
			);
		}
	}
}
