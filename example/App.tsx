import React, { useState, useEffect } from "react";
import { View, StyleSheet, PixelRatio, Text, StatusBar, Dimensions, Platform } from "react-native";

import useDimensions from './src/hooks/useDimensions'
import useLog from './src/hooks/useLog'
import ScaleText from '@grean/react-native-scale-text'

const round2 = (val: number): number => Math.round(val * 100) / 100

const percentageCalculation = (max: number, val: number) => max * (val / 100);

const fss = (height: number, width: number, val: number) => {
  fs(height, width, val, true)
};

const fs = (height: number, width: number, val: number, withScale = false) => {
  // const seizeNeufRatio = 16 / 9
  // // const ratio = seizeNeufRatio - height / width;
  // // const correction = (ratio < 0) ? (seizeNeufRatio / height / width) : (height / width / seizeNeufRatio)
  // const correction = seizeNeufRatio / (height / width)
  const ratioIphone12ProMax = 428 / width
  return percentageCalculation(
    Math.sqrt(
      Math.pow(height, 2) + Math.pow(width, 2)
    ),
    val
    // )
    // ) * (withScale ? 1 : (1 / PixelRatio.getFontScale()))
  ) * (withScale ? 1 : (1 / PixelRatio.getFontScale())) * ratioIphone12ProMax
  // ) * (withScale ? 1 : (1 / PixelRatio.getFontScale())) * correction
};

export default function App() {
  useLog('App')
  const { dimensions, isLandscape } = useDimensions()
  const { height, width } = dimensions.window
  const fontSize = 100

  const infos = `FontScale ${PixelRatio.getFontScale()} Density ${PixelRatio.get()}
  ratio ${round2(height / width)}
  resolution dp ${round2(height)}*${round2(width)}
  definition ${height * PixelRatio.get()}*${width * PixelRatio.get()} ${height * width * PixelRatio.get()}
  image 100 ${PixelRatio.getPixelSizeForLayoutSize(100)}
  Tiers ${height / 1.3} Nearest ${PixelRatio.roundToNearestPixel(height / 1.3)}
  Ratio ${height / width}`

  const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda ea alias recusandae tempore accusantium repudiandae pariatur! Quibusdam rem, illum consequuntur voluptatum quo magni. Nam, cupiditate. Sapiente sed cupiditate nulla?`

  const fontSize2 = fs(height, width, 2)
  const fontSizeStatic = 20
  // const fontSizeTest = fsTest(height, width, 2)

  // useEffect(() => {
  //   useLog(`useEffect App`)
  // }, []);

  return (
    <View style={[styles.container, { flexDirection: isLandscape ? 'row' : 'column' }]}>
      <View style={[
        styles.child,
        {
          backgroundColor: 'pink',
        }
      ]}>
        <Text
          style={{
            backgroundColor: 'green',
            textAlign: 'center',
            fontSize: fontSize2,
            color: 'white',
            // fontSize: '5%',
            // marginHorizontal: 30,
            // marginHorizontal: fs(2),
            marginHorizontal: '5%',
          }}
        >
          {`${fontSize2} ${lorem}`}
        </Text>
      </View>
      <View style={[
        styles.child,
        {
          backgroundColor: 'green',
        }
      ]}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: "orange",
        }}>
        </View>
        <ScaleText
          {...{
            // allowFontScaling: true,
            allowFontScaling: false,
            fontSize,
            onPress: () => (alert('lol')),
            // padding: '10%',
            textStyle: {
              // fontSize: 20,
            }
          }}
        >
          {lorem}
        </ScaleText>
      </View>
      <View style={styles.child}>
        <Text
          style={{
            backgroundColor: 'purple',
            textAlign: 'center',
            fontSize: height * 0.025,
            // fontSize: fontSizeTest,
            color: 'white',
            // fontSize: '5%',
            // marginHorizontal: 30,
            // marginHorizontal: fs(2),
            marginHorizontal: '5%',
          }}
        >
          {`${infos}`}
        </Text>
      </View>
      {/* <View style={styles.child}>
      </View> */}
    </View >
  );
}

const styles = StyleSheet.create({
  child: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "orange",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "pink",
    // alignItems: "center"
  }
});





// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import { useDimensions } from '@react-native-community/hooks'

// // import { useEffect, useState } from 'react'
// // import { Dimensions, ScaledSize } from 'react-native'

// // export function useDimensions() {
// //   const [dimensions, setDimensions] = useState({
// //     window: Dimensions.get('window'),
// //     screen: Dimensions.get('screen'),
// //   })

// //   const onChange = ({
// //     window,
// //     screen,
// //   }: {
// //     window: ScaledSize
// //     screen: ScaledSize
// //   }) => {
// //     setDimensions({ window, screen })
// //   }

// //   useEffect(() => {
// //     Dimensions.addEventListener('change', onChange)

// //     return () => Dimensions.removeEventListener('change', onChange)
// //   }, [])

// //   return dimensions
// // }

// export default function App() {
//   console.log('App')
//   // const dimensions = useDimensions()
//   // or
//   // const { width, height } = useDimensions().window
//   // // or
//   // const screen = useDimensions().screen

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
