# React component for Avataaars

React component for [Avataaars](https://avataaars.com/), used by [Avataaars Generator](https://getavataaars.com/). Designed by [Pablo Stanley](https://twitter.com/pablostanley) and developed by [Fang-Pen Lin](https://twitter.com/fangpenlin)

<p align="center"><img src='avataaars-example.png?raw=true' style='width: 300px; height: 300px;' /></p>

## Features

 - SVG based
 - Light weight 
 - Scalable
 - Easy to use
 - Easy to integrate with custom editor
 - Comes with [official editor](https://getavataaars.com/)

## Usage

First, you need to install the avataaars component package, here you run

```
yarn add avataaars
```

or

```
npm install avataaars --save
```

if you are using npm. Then, in your React app, import the Avataaar component and put it where you like it to be, fro example

```jsx
import * as React from 'react'
import Avatar from 'avataaars'

export default class MyComponent extends React.Component {
  render () {
    return 
      <div>
        Your avatar:
        <Avatar
          style={{width: '100px', height: '100px'}}
          avatarStyle='Circle'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />
      </div>
  }
}
```

To explore avatar options and generate React code, please use [Avataaars Generator](https://getavataaars.com/)
