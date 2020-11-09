import * as React from 'react'
import { ReactEventHandler, ReactNode } from 'react'

declare namespace coolTopologyTypes {

  interface INodeProps {
    id: string
    label?: string | ReactNode
    name?: string | ReactNode
    width?: number
    height?: number
    fillColor?: string
    htmlContent?: HTMLElement
    onClick?: (e: ReactEventHandler) => void
    childs?: IEdgeProps[]
  }
  interface IEdgeProps {
    target: string
    source: string
    label?: string | ReactNode
  }
  interface IMainProps {
    nodes: INodeProps[]
    edges: IEdgeProps[]
    width?: number
    height?: number
    loading: boolean
    loadingPlaceHolder?: string | ReactNode
    placeHolder?: string | ReactNode
  }
}

export { coolTopologyTypes }

export default class CoolTopology extends React.PureComponent<
  coolTopologyTypes.IMainProps,
  any
  > {}