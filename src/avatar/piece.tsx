import * as React from 'react'

import Clothe from './clothes'
import Graphics from './clothes/Graphics'
import Accessories from './top/accessories'
import FacialHair from './top/facialHair'
import Top from './top'

import Eyes from './face/eyes'
import Eyebrows from './face/eyebrow'
import Mouth from './face/mouth'
import Nose from './face/nose'
import Skin from './Skin'

export enum AvatarStyle {
  Circle = 'Circle',
  Transparent = 'Transparent',
}

export interface Props {
  pieceSize?: string
  pieceType?: string
  avatarStyle: AvatarStyle
  style?: React.CSSProperties
  viewBox?: string
}

export default class PieceComponent extends React.Component<Props> {
  render() {
    return (
      <svg
        style={this.props.style}
        width={`${this.props.pieceSize}px`}
        height={`${this.props.pieceSize}px`}
        viewBox={this.props.viewBox || "0 0 264 280"}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        {this.props.pieceType === 'top' && <Top />}
        {this.props.pieceType === 'clothe' && <Clothe />}
        {this.props.pieceType === 'graphics' && <Graphics maskID="1234" />}
        {(this.props.pieceType === 'accessories' ||
          this.props.pieceType === 'accesories') && <Accessories />}
        {this.props.pieceType === 'facialHair' && <FacialHair />}
        {this.props.pieceType === 'eyes' && <Eyes />}
        {this.props.pieceType === 'eyebrows' && <Eyebrows />}
        {this.props.pieceType === 'mouth' && <Mouth />}
        {this.props.pieceType === 'nose' && <Nose />}
        {this.props.pieceType === 'skin' && <Skin maskID="5678" />}
      </svg>
    )
  }
}
