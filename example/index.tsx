import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'
import '../dist/index.css'
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
  return <div className={'example'}>
    <CoolTopology {...data}/>
  </div>
}

const root = document.getElementById('root')
ReactDOM.render(<App/>, root)
