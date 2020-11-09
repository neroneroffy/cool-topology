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
  return <foreignObject
    width={`${width}`}
    height={`${height}`}
    id={id}
  >
    {
      htmlContent ?
        htmlContent
        :
        <circle
          cx="100"
          cy="50"
          r={`${Math.min(width, height) / 2}`}
          fill={fillColor}
        />
    }
  </foreignObject>
}

export default Node