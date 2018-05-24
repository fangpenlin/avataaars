import * as React from 'react'
import * as uniqueId from 'lodash.uniqueid'

export default class BlazerShirt extends React.Component {
  static optionValue = 'BlazerShirt'

  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g
        id='Clothing/Blazer-+-Shirt'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M133.960472,0.294916112 C170.936473,3.32499816 200,34.2942856 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22536245e-14,33.9525631 29.591985,2.76498122 67.0454063,0.219526408 C67.0152598,0.593114549 67,0.969227185 67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994669088 133.986723,0.64370138 133.960472,0.294916112 Z'
            id={path1}
          />
        </defs>
        <g id='Shirt' transform='translate(32.000000, 29.000000)'>
          <mask id={mask1} fill='white'>
            <use xlinkHref={'#' + path1} />
          </mask>
          <use id='Clothes' fill='#E6E6E6' xlinkHref={'#' + path1} />
          <g id='Color/Palette/Black' mask={`url(#${mask1})`} fill='#262E33'>
            <g transform='translate(-32.000000, -29.000000)' id='🖍Color'>
              <rect x='0' y='0' width='264' height='110' />
            </g>
          </g>
          <g
            id='Shadowy'
            opacity='0.599999964'
            mask={`url(#${mask1})`}
            fillOpacity='0.16'
            fill='#000000'>
            <g transform='translate(60.000000, -25.000000)' id='Hola-👋🏼'>
              <ellipse
                cx='40.5'
                cy='27.8476251'
                rx='39.6351047'
                ry='26.9138272'
              />
            </g>
          </g>
        </g>
        <g id='Blazer' transform='translate(32.000000, 28.000000)'>
          <path
            d='M68.784807,1.12222847 C30.512317,2.80409739 -1.89486556e-14,34.3646437 -1.42108547e-14,73.0517235 L0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z'
            id='Saco'
            fill='#3A4C5A'
          />
          <path
            d='M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z'
            id='Pocket-hanky'
            fill='#E6E6E6'
          />
          <path
            d='M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
          />
          <path
            d='M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
            transform='translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) '
          />
        </g>
      </g>
    )
  }
}
