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
					<th className="itemSettings">
						<img
							src="../Styles/Images/Icons/edit.svg"
							className="edit"
							onClick={() => showModalEdit(this.props.item)}
						></img>
						<img
							src="../Styles/Images/Icons/delete.svg"
							className="delete"
							onClick={() =>
								showConfirmation(this.props.item, "Are you sure you want to delete this element?", "Cancel", "Delete")
							}
						></img>
					</th>
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
					<th className="itemSettings">
						<img
							src="../Styles/Images/Icons/edit.svg"
							className="edit"
							onClick={() => showModalEdit(this.props.item)}
						></img>
						<img
							src="../Styles/Images/Icons/delete.svg"
							className="delete"
							onClick={() =>
								showConfirmation(this.props.item, "Are you sure you want to delete this element?", "Cancel", "Delete")
							}
						></img>
					</th>
				</tr>
			);
		}
	}
}
