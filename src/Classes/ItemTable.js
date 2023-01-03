class ItemTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [1],
		};
	}
	render() {
		return this.props.items.map((element, index) => <Item key={index} item={element} />);
	}
}
