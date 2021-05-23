import React, { useState } from 'react'
import { View, Text, LayoutChangeEvent, PixelRatio, Pressable, Dimensions } from 'react-native'

type ParentLayout = {
  width: number
  height: number
}

export type TextStyleType = {
  fontFamily?: string
  // fontSize?: number
  backgroundColor?: string
  color?: string
}

interface ScaleTextProps {
  allowFontScaling?: boolean
  children: React.ReactNode
  containerStyle?: TextStyleType
  fontSize: number
  padding?: string
  onPress?: () => void
  textStyle?: TextStyleType
}

const ScaleText = ({
  allowFontScaling = false,
  children,
  containerStyle,
  fontSize,
  onPress,
  padding = '0%',
  textStyle,
}: ScaleTextProps) => {
  const [layout, setLayout] = useState<ParentLayout | null>(null);
  // useLog(`ScaleText Layout widthDp ${layout?.width} heightDp ${layout?.height}`)

  const width = (layout?.width ?? 1)
  const height = (layout?.height ?? 1)
  const pixelRatio = PixelRatio.get()

  const widthPx = width * pixelRatio
  const heightPx = height * pixelRatio

  // useLog(`heightPx ${heightPx} widthPx ${widthPx}`)
  const paddingPx = heightPx * (parseFloat(padding) / 100.0)
  const paddingVerticalPx = paddingPx
  const paddingHorizontalPx = paddingPx
  const widthContainerPx = widthPx - paddingHorizontalPx * 2
  const heightContainerPx = heightPx - paddingVerticalPx * 2
  // const fontSize = 0.035
  // let fontScaleDp = (height * fontSize + width * fontSize)
  // const fontSize = 0.009
  // let fontScaleDp = (height * fontSize + width * fontSize) * (width / height)
  // const fontSize = 0.035
  // let fontScaleDp = (heightContainerPx * fontSize + widthContainerPx * fontSize) / pixelRatio
  // const fontSize = 60
  // const iphoneResolution = (1284 * 2778)
  const window = Dimensions.get('window')
  // height of iphone 12 pro max
  let coef = (2778 / (window.height * pixelRatio))
  // if (coef > 1.5) {
  //   coef /= 2.3
  // }
  // const delta = currentResolution - iphoneResolution
  // const coef = (delta > 0) ? currentResolution / iphoneResolution : iphoneResolution / currentResolution

  // const coef = fontSize * ((heightContainerPx / pixelRatio))
  // let fontScaleDp = ((heightContainerPx + widthContainerPx) * (coef)) / (heightContainerPx + widthContainerPx) / pixelRatio

  let fontScaleDp = ((heightContainerPx + widthContainerPx) * (fontSize / coef)) / (heightContainerPx + widthContainerPx) / pixelRatio
  // const tmp = 0.00015
  // let fontScaleDp = ((heightContainerPx * widthContainerPx) / pixelRatio * tmp)

  // const iphone12ProMaxHeight = 2778
  // const iphone12ProMaxWidth = 1284
  // const heightDiff = iphone12ProMaxHeight / heightContainerPx
  // const widthDiff = iphone12ProMaxWidth / widthContainerPx

  // let fontScaleDp = ((heightContainerPx * heightDiff + widthContainerPx * widthDiff) * fontSize) / (heightContainerPx * heightDiff + widthContainerPx * widthDiff) / 3
  // if (!allowFontScaling) {
  //   fontScaleDp *= (1 / PixelRatio.getFontScale())
  // }
  // fontScaleDp = PixelRatio.roundToNearestPixel(fontScaleDp)


  return (
    <View
      onLayout={({ nativeEvent: { layout: { x, y, width, height } } }: LayoutChangeEvent) => {
        // useLog(`event x ${x} y ${y} width ${width} height ${height}`)
        setLayout({ width, height })
      }}
      style={[{
        flex: 1,
        // backgroundColor: 'cyan',
      },
        containerStyle
      ]}
    >
      {layout &&
        <View
          style={{
            width: widthContainerPx / pixelRatio,
            height: heightContainerPx / pixelRatio,
            marginTop: paddingVerticalPx / pixelRatio,
            marginLeft: paddingHorizontalPx / pixelRatio,
            // width: PixelRatio.roundToNearestPixel(widthContainerPx / pixelRatio),
            // height: PixelRatio.roundToNearestPixel(heightContainerPx / pixelRatio),
            // marginTop: PixelRatio.roundToNearestPixel(paddingVerticalPx / pixelRatio),
            // marginLeft: PixelRatio.roundToNearestPixel(paddingHorizontalPx / pixelRatio),
            // backgroundColor: 'yellow',
          }}
        >
          <Pressable
            {...{
              onPress,
              style: {
                flex: 1,
                justifyContent: 'center',
                // justifyContent: 'flex-start',
                // overflow: 'hidden',
              },
            }}
          >
            {/* <View style={{ position: 'absolute', top: -50 }}>
              <Text style={{ fontSize: 20, color: '#000' }}>{fontScaleDp}</Text>
          </View> */}

            <Text
              {...{
                allowFontScaling,
                style: {
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: fontScaleDp,
                  // overflow: 'hidden',
                  includeFontPadding: false,
                  // backgroundColor: 'blue',
                  // padding: 10,
                  ...textStyle
                }
              }}
            // adjustsFontSizeToFit={true}
            // textBreakStrategy={'balanced'}
            >
              {/* {`surface ${Math.round(heightContainerPx * widthContainerPx)}
              text ${(children as string).length}
              lol
              `} */}
              {children}
            </Text>
          </Pressable>
        </View>
      }
    </View>
  )
}

export default ScaleText
