class ModalBackground extends React.Component {
	render() {
		if (this.props.visible == "true") {
			return <div className="bgContainer"></div>;
		} else {
			return;
		}
	}
}
