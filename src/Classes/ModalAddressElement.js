class ModalAddressElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			restored: false,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value }, this.callback);
	}
	callback() {
		this.props.setAddress(this.state.value);
	}

	componentDidMount() {
		this.props.setAddress(this.state.value);
		this.setState({ restored: true });
	}

	render() {
		// Edition field
		if (this.props.edit != "" && this.state.value == "" && this.state.restored == false) {
			// Fin separators
			let dotIndices = [];
			for (let i = 0; i < this.props.data.length; i++) {
				if (this.props.data[i] == ".") {
					dotIndices.push(i);
				}
			}

			// Get individual adresses
			switch (this.props.index) {
				case "1":
					this.state.value = this.props.data.substring(0, dotIndices[0]);
					break;
				case "2":
					this.state.value = this.props.data.substring(dotIndices[0] + 1, dotIndices[1]);
					break;
				case "3":
					this.state.value = this.props.data.substring(dotIndices[1] + 1, dotIndices[2]);
					break;
				case "4":
					this.state.value = this.props.data.substring(dotIndices[2] + 1, this.props.data.length);
					break;
				default:
					break;
			}
		}

		// STATIC
		if (this.props.parentState.DHCP == false) {
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
		}

		// DHCP
		else {
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
