class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.item.DHCP == true) {
			return (
				<tr key={this} onDoubleClick={() => activateNetwork(this.props.item)}>
					<th>{this.props.item.name}</th>
					<th>DHCP</th>
					<th>DHCP</th>
					<th>DHCP</th>
					<th>{this.props.item.adapter}</th>
					<th className="delete" onClick={() => deleteElement(this.props.item)}></th>
				</tr>
			);
		} else {
			return (
				<tr key={this} onDoubleClick={() => activateNetwork(this.props.item)}>
					<th>{this.props.item.name}</th>
					<th>{this.props.item.ipAddress}</th>
					<th>{this.props.item.subnet}</th>
					<th>{this.props.item.gateway}</th>
					<th>{this.props.item.adapter}</th>
					<th className="delete" onClick={() => deleteElement(this.props.item)}></th>
				</tr>
			);
		}
	}
}
