import React from "react";
import { View, StyleSheet, PixelRatio, Text, } from "react-native";
import {
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import useDimensions from './src/hooks/useDimensions'
import useLog from './src/hooks/useLog'
import ScaleText from '../src/ScaleText'

const round2 = (val: number): number => Math.round(val * 100) / 100

export default function App() {
  useLog('App')
  const { dimensions, isLandscape } = useDimensions()
  const { height, width } = dimensions.window

  const responsiveFont = isLandscape ? responsiveScreenFontSize(2.3) : responsiveScreenFontSize(2.75)
  const scaleTextFontSize = isLandscape ? 260 : 144
  // const scaleTextFontSize = isLandscape ? 130 : 72
  const fixedFontSize = isLandscape ? 19.3 : 24

  const infos = `FontScale ${PixelRatio.getFontScale()} Density ${PixelRatio.get()}
  ratio ${round2(height / width)}
  resolution dp ${round2(height)}*${round2(width)}
  definition ${height * PixelRatio.get()}*${width * PixelRatio.get()} ${height * width * PixelRatio.get()}
  image 100 ${PixelRatio.getPixelSizeForLayoutSize(100)}`

  const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda ea alias recusandae tempore accusantium repudiandae pariatur! Quibusdam rem, illum consequuntur voluptatum quo magni.`

  return (
    // <View style={[styles.container]}>
    <View style={[styles.container, { flexDirection: isLandscape ? 'row' : 'column' }]}>
      <View style={
        styles.child
      }>
        <Text
          allowFontScaling={false}
          style={{
            backgroundColor: 'purple',
            textAlign: 'center',
            fontSize: responsiveFont,
            color: 'white',
            // padding: '5%',
            // marginHorizontal: '5%',
          }}
        >
          {`Responsive font: ${Math.round(responsiveFont * 100) / 100}\n${lorem}`}
        </Text>
      </View>
      <View style={[
        styles.childMiddle,
        { flexDirection: 'row' }
      ]}>
        {/* {isLandscape && <View style={{ flex: 1 }}></View>} */}
        <ScaleText
          {...{
            // allowFontScaling: true,
            allowFontScaling: false,
            debug: true,
            fontSize: scaleTextFontSize,
            // onPress: () => (alert('lol')),
            // padding: '5%',
            textStyle: {
              backgroundColor: 'green'
            }
          }}
        >
          {`ScaleText font: ${scaleTextFontSize}\n${lorem}`}
        </ScaleText>
      </View>
      <View style={styles.child}>
        <Text
          allowFontScaling={false}
          style={{
            backgroundColor: 'blue',
            textAlign: 'center',
            fontSize: fixedFontSize,
            color: 'white',
            // padding: '5%',
            // marginHorizontal: '5%',
          }}
        >
          {/* {`Fixed font: ${fixedFontSize}\n${lorem}`} */}
          {`${infos}`}
        </Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "pink",
  },
  childMiddle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
  },
});
