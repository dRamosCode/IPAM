class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr key={this} onDoubleClick={() => activateNetwork(this.props.item)}>
				<th>{this.props.item.name}</th>
				<th>{this.props.item.ipAddress}</th>
				<th>{this.props.item.subnet}</th>
				<th>{this.props.item.gateway}</th>
				<th>{this.props.item.adapter}</th>
				<th>Settings</th>
			</tr>
		);
	}
}
