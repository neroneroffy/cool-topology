import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'
import CoolTopology from '../src'
const logo = require('./assets/logo.png').default
import classnames from 'classnames'
const { useState, useEffect, useRef } = React


const App = () => {
  const data = {
    nodes: [
      {
        id: '1',
        name: '111',
        label: 'label-111'
      },
      {
        id: '2',
        name: '222',
        label: 'label-222'
      },
      {
        id: '3',
        name: '333',
        label: 'label-333'
      },
    ],
    edges: [
      {
        target: '3',
        source: '1',
        label: '1 -> 3'
      },
      {
        target: '2',
        source: '1',
        label: '1 -> 2'
      },
    ],
    loading: false,
    width: 800,
    height: 1000,
  }
  const { nodes, edges } = data
/*
  
  const adjoinTable = []
  const findNodeByEdge = (node, edges) => {
    const edgeOut = edges.find(edge => edge.source === node.id)
    if (!edgeOut) {
      return null
    }
    const target = nodes.find(node => node.id === edgeOut.target)
    return {
      data: target,
      next: target ? findNodeByEdge(target, edges) : null
    }
  }
  nodes.forEach(node => {
    const head = {
      data: node,
      next: null
    }
    head.next = findNodeByEdge(node, edges)
    adjoinTable.push(head)
  })
  console.log(adjoinTable);
*/
  //
  const adjoinMatrix = []
  nodes.forEach(nodeY => {
    const row = []
    nodes.forEach(nodeX => {
      const outEdge = edges.find(edge => edge.source === nodeY.id)
      const inEdge = edges.find(edge => edge.source === nodeX.id)
      if (outEdge && outEdge.target === nodeX.id) {
        row.push(1)
      } else if (inEdge && inEdge.target === nodeY.id) {
        row.push(1)
      } else {
        row.push(null)
      }
    })
    adjoinMatrix.push(row)
  })
  console.log(adjoinMatrix);
  return <div className={'example'}>
    <CoolTopology {...data}/>
  </div>
}

const root = document.getElementById('root')
ReactDOM.render(<App/>, root)
