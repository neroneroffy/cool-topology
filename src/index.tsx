import * as React from 'react'
import { coolTopologyTypes } from '../'
import Node from './components/Nodes'
import Edges from './components/Edges'
import './index.less'

const CoolTopology: React.FC<coolTopologyTypes.IMainProps> = props => {
  const {
    width = 800,
    height = 800,
    nodes = [],
    edges = [],
  } = props
  return <div id={'cool-topology'} >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={`${width}`}
      height={`${height}`}
    >
      { nodes.map(node => <Node key={node.id} {...node}/>) }
    </svg>
  </div>
}

export default CoolTopology;
