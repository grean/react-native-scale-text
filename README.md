# react-native-scale-text
Scale-text is a component that allows you to keep the display of your texts consistent and independent of the device's display context.<br/>
It's a full typescript component that uses a View wrapper with onLayout state to compute the font of the text relatively.<br/>
The work is still in progress but you can use it and improve it if you want! PR are welcome.<br/>
<br/>
<a align="center" href="https://www.npmjs.com/package/@grean/react-native-scale-text">
  <img src="https://img.shields.io/npm/v/@grean/react-native-scale-text" />
</a>

## Compare responsiveScreenFontSize formula VS ScaleText component VS RN value (24) 
# Portrait
![Examples in protrait](./assets/portrait.jpg)
# Landscape
![Example in landscape](./assets/landscape.jpg)

## Installation
Using yarn:

```sh
yarn add @grean/react-native-scale-text
```

## Usage
Simply use ```<ScaleText>``` component almost like a RN ```<Text>``` component.

```tsx
const isLandscape = false
const fontSize = isLandscape ? 130 : 72
const yourText = `Lorem ... magni.`

//removed code for brevety

<ScaleText
  {...{
    allowFontScaling: false,
    debug: true,
    fontSize,
    onPress: () => (alert('ScaleText clicked!')),
    textStyle: {
      backgroundColor: 'green'
    }
  }}
>
  {yourText}
</ScaleText>
```

## Component props
```tsx
interface ScaleTextProps {
  allowFontScaling?: boolean // false
  children: React.ReactNode // 'your text here'
  containerStyle?: {
    // * <View> style props
    // default running values that you can override:
    flex: 1,
    justifyContent: 'center',
  }
  fontSize: number // 80
  padding?: string // '0%'
  onPress?: () => void
  textStyle?: {
    // * <Text> style prop EXCEPT fontSize.
    // default running values that you can override:
    textAlign: 'center',
    color: '#fff',
    includeFontPadding: false,
  }
  debug?: boolean // false
}
```

## Testing
See Expo example app for testing with hot-reload, you can directly modify the code's component and see how it looks immediately.
```sh
git clone https://github.com/grean/react-native-scale-text.git
cd react-native-scale-text && yarn
cd example && yarn && yarn ios
```

## TODO
If you want to improve the component:<br/>
<ul>
  <li>
    The more the device's window dimensions has a ratio near (~1) (like a square) the less this component is usefull. Mostly in landscape display context.
  </li>
</ul>


## About
If you want to eat well and healthy, i recommand you to check out my mobile app [Dietethic.net](https://dietethic.net)<br/>

<a align="center" href="https://github.com/grean?tab=followers">
  <img src="https://img.shields.io/github/followers/grean?label=Follow%20%40grean&style=social" />
</a>
<br />
<a align="center" href="https://twitter.com/reanGuillaume">
  <img src="https://img.shields.io/twitter/follow/reanGuillaume?label=Follow%20%40reanGuillaume&style=social" />
</a>

## License 
MIT
