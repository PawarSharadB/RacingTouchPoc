import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {sizeAdaption} from '../../utils/measurements';

const defaultStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: sizeAdaption(1),
  } as ViewStyle,
  liveTextTitle: {
    fontSize: sizeAdaption(15),
    marginLeft: sizeAdaption(4),
  } as TextStyle,
  imageStyles: {
    width: sizeAdaption(35),
    height: sizeAdaption(35),
  } as ImageStyle,
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: sizeAdaption(1),
    left: 0,
  } as ViewStyle,
};

export const presets = {
  default: defaultStyles,
};

export type CircleButtonPresets = keyof typeof presets;
