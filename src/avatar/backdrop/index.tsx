import * as React from 'react'

import CircleBackdrop from './CircleBackdrop'
import NoBackdrop from './NoBackdrop'
import { Selector, BackdropOption } from '../../options'

export default class Backdrop extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Selector defaultOption={CircleBackdrop} option={BackdropOption}>
        <NoBackdrop>{children}</NoBackdrop>
        <CircleBackdrop>{children}</CircleBackdrop>
      </Selector>
    )
  }
}
