import React from 'react'
import ReactDOM from 'react-dom'
import MyGraph from './examples/components/mygraph'
import NodePos from './nodePos'


let mynode1 = {
	node: new NodePos({x:50, y:50}),
	edges: []
}
let mynode2 = {
	node: new NodePos({x:210, y:160}),
	edges: []
}
mynode1.edges.push(mynode2);
let mygraph = {
	mynodes: [mynode1, mynode2]
}

ReactDOM.render(
  <MyGraph tree={mygraph}/>,
  document.getElementById('sample')
);