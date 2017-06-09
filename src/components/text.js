import React from 'react'

export default class CSText extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			x: this.props.x,
			y: this.props.y
		}
	}

	onEvalClicked() {
		if(this.props.item.onEvalClicked) this.props.item.onEvalClicked();
	}

	render() {
		let {item, depth} = this.props;
		let width = 100 + item.getWidth();
		let height = 50;
		let children = null;
		let text = '';
		let evaluatable = false, hiddable = false;

		let transform = "translate("+(this.state.x-(width/2))+","+(this.state.y-50)+")";
		let icon_transform = "translate("+(width-40)+","+(0)+")";
		return (<g transform={transform}>
			<rect width={width} height={height} style={{"fill":"rgb(255,255,250)","strokeWidth":1,"stroke":"rgb(0,0,0)"}}></rect>
  			<g transform={icon_transform}>
  				{evaluatable?
	  			(<g>
		      		<rect x="0" y="0" width="40" height="20" style={{"fill":"#5a60ef","stroke":"#111","strokeWidth":1}} onClick={this.onEvalClicked.bind(this)}></rect>
		      		<text x="6" y="17" fill="#fff" style={{"fontSize":"12px"}} onClick={this.onEvalClicked.bind(this)}>Eval</text>
		      	</g>):(<div/>)
		      	}
		      	{hiddable?
		      	(<g>
		      		<rect x="0" y="20" width="40" height="20" style={{"fill":"#5a60ef","stroke":"#111","strokeWidth":1}} onClick={this.onShowClicked.bind(this)}></rect>
		      		<text x="6" y="37" fill="#fff" style={{"fontSize":"12px"}} onClick={this.onShowClicked.bind(this)}>{this.state.hideChildren?'Show':'Hide'}</text>
		      	</g>):(<div/>)
		      	}
	      	</g>
	      	<foreignObject>
		      <textArea x="6" y="20" fill="#333" style={{"width":width, "height":height, "fontSize":"14px"}}>{text}</textArea>
	      	</foreignObject>
	      </g>)
	}
}
