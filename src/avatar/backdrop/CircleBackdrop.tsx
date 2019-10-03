import * as React from 'react'

import BackdropColor from './BackdropColor'

export default class CircleBackdrop extends React.Component {
  static optionValue = 'Circle'

  render() {
    return (
      <g
        id="Circle"
        strokeWidth="1"
        fillRule="evenodd"
        transform="translate(12.000000, 40.000000)">
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1" />
        </mask>
        <use id="Circle-Background" fill="#E6E6E6" xlinkHref="#path-1" />
        <BackdropColor maskID="mask-2" defaultColor="Blue01" />
        <mask id="mask-4" fill="white">
          <use xlinkHref="#path-3" />
        </mask>
      </g>
    )
  }
}
