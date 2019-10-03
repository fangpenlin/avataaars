import * as React from 'react'

import { BackdropColorOption, Selector } from '../../options'

export interface Props {
  maskID: string
  defaultColor?: string
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id="Color/Palette/Blue-01"
          mask={`url(#${this.props.maskID})`}
          fill={color}>
          <rect id="🖍Color" x="0" y="0" width="240" height="240" />
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

const Black = makeColor('Black', '#262E33')
const Blue01 = makeColor('Blue01', '#65C9FF')
const Blue02 = makeColor('Blue02', '#5199E4')
const Blue03 = makeColor('Blue03', '#25557C')
const Gray01 = makeColor('Gray01', '#E6E6E6')
const Gray02 = makeColor('Gray02', '#929598')
const Heather = makeColor('Heather', '#3C4F5C')
const PastelBlue = makeColor('PastelBlue', '#B1E2FF')
const PastelGreen = makeColor('PastelGreen', '#A7FFC4')
const PastelOrange = makeColor('PastelOrange', '#FFDEB5')
const PastelRed = makeColor('PastelRed', '#FFAFB9')
const PastelYellow = makeColor('PastelYellow', '#FFFFB1')
const Pink = makeColor('Pink', '#FF488E')
const Red = makeColor('Red', '#FF5C5C')
const White = makeColor('White', '#FFFFFF')

export default class Colors extends React.Component<Props> {
  render() {
    return (
      <Selector
        option={BackdropColorOption}
        defaultOption={this.props.defaultColor || Blue01}>
        <Black maskID={this.props.maskID} />
        <Blue01 maskID={this.props.maskID} />
        <Blue02 maskID={this.props.maskID} />
        <Blue03 maskID={this.props.maskID} />
        <Gray01 maskID={this.props.maskID} />
        <Gray02 maskID={this.props.maskID} />
        <Heather maskID={this.props.maskID} />
        <PastelBlue maskID={this.props.maskID} />
        <PastelGreen maskID={this.props.maskID} />
        <PastelOrange maskID={this.props.maskID} />
        <PastelRed maskID={this.props.maskID} />
        <PastelYellow maskID={this.props.maskID} />
        <Pink maskID={this.props.maskID} />
        <Red maskID={this.props.maskID} />
        <White maskID={this.props.maskID} />
      </Selector>
    )
  }
}
