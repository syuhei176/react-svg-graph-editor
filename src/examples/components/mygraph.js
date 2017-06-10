import React from 'react'
import {Graph} from '../../'
import MyNode from './mynode'

export default class Editor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		const {tree} = this.props;
		const mynodes = tree.mynodes.map((mynode)=>{
			return (<MyNode graph={tree} item={mynode}></MyNode>)
		})
		return (<Graph>
			{mynodes}
		</Graph>)
	}
}