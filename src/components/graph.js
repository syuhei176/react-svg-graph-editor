import React from 'react'

export default class Graph extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {children} = this.props;
		let browserSize = {
		  width: window.innerWidth || document.body.clientWidth,
		  height: window.innerHeight || document.body.clientHeight
		}
		return (<svg width={browserSize.width} height={browserSize.height}>
					<g>
						{children}
					</g></svg>)
	}
}