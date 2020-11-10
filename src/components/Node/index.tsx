import React from 'react'
import { coolTopologyTypes } from '../../../'
import { primaryColor } from '../../common/constants'
const Node: React.FC<coolTopologyTypes.INodeProps> = props => {
  const {
    width = 50,
    height = 50,
    id,
    fillColor = primaryColor,
    htmlContent,
  } = props
  return htmlContent ? <foreignObject
    width={`${width}`}
    height={`${height}`}
    id={id}
  >
    {htmlContent}
  </foreignObject>
    :
    <circle
      cx="100"
      cy="50"
      id={id}
      r={`${Math.min(width, height) / 2}`}
      fill={fillColor}
    />
}

export default Node
