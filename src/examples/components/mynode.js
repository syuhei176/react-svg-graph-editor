import React from 'react'
import {Node, Edge} from '../../'

export default class Process extends React.Component {
	constructor(props) {
		super(props)
	}

	onEdit() {
		window.alert('clicked!!')
	}

	render() {
		let {item} = this.props;
		let edges = item.edges.map((target) => {
			return (<Edge src={item} target={target}></Edge>)
		});
		return (<Node width={200} height={100} node={item.node} edges={edges}>
					<rect x="0" y="0" width="40" height="20" style={{"fill":"#5d67ef","stroke":"#111","strokeWidth":1}} onClick={this.onEdit.bind(this)}></rect>
			</Node>)
	}
}
