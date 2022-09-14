import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Svg, { Circle, LinearGradient, Stop, Defs, G } from 'react-native-svg';
import { palette } from '../../theme/pallete';
import { sizeAdaption } from '../../utils/measurements';
import { presets } from './circle-button.presets';
import { CircleButtonProps } from './circle-button.props';

export const CircleButton = (props: CircleButtonProps) => {
  const {
    size,
    index,
    textOpacity,
    selected,
    isBrownTrack,
    type,
    text,
    textSize,
    disabledRace = false,
    currentTheme,
  } = props;

  const styles = presets.default;
  const viewBox = sizeAdaption(92);
  const strokeWidth = sizeAdaption(4);
  const innerRadius = sizeAdaption(35);
  const outerRadius = sizeAdaption(41);
  const color = palette;
  const perimeter = Math.PI * 2 * outerRadius;

  const textStyle = {
    fontSize: textSize,
    color: disabledRace ? color.raceDisabledText : color.white.number0,
    opacity: 1,
  };
  if (textOpacity) {
    if (currentTheme === 'lightTheme') {
      textStyle.opacity = textOpacity;
    } else {
      textStyle.opacity = 1;
    }
  }

  const getStatusColor = (): JSX.Element | JSX.Element[] => {
    return (
      <LinearGradient x1="1" y1="0" x2="0" y2="0" id="gradient1">
        <Stop
          offset="100%"
          stopColor={
            textOpacity < 1
              ? color.linearGradientCircleButtonColorDone2
              : color.linearGradientCircleButtonColor2
          }
        />
        <></>
      </LinearGradient>
    );
  };

  const ButtonContent = () => {
    return (
      <View style={styles.container}>
        <Svg
          width={size}
          height={size}
          viewBox={`0 -5 ${viewBox} ${viewBox + 3}`}>
          <Defs>{getStatusColor()}</Defs>
          <Circle
            cx={viewBox / 2}
            cy={viewBox / 2}
            r={innerRadius}
            fill={color.linearGradientCircleButtonColor1}
          />
          {selected && type && (
            <G transform={`matrix(0,-1,1,0,0,${viewBox})`}>
              <Circle
                cx={viewBox / 2}
                cy={viewBox / 2}
                r={outerRadius}
                strokeWidth={strokeWidth}
                stroke={isBrownTrack ? color.trackBrown : color.trackGreen}
                fill="none"
                strokeDasharray={`${perimeter} ${perimeter}`}
                strokeLinecap="round"
              />
            </G>
          )}
        </Svg>

        <View
          style={[
            {
              width: size,
              height: size,
            },
            styles.textView,
          ]}>
          <Text style={textStyle}>{text}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <ButtonContent />
    </TouchableWithoutFeedback>
  );
};
