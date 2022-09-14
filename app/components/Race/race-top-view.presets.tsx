import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {sizeAdaption} from '../../utils/measurements';

const defaultStyles = {
  liveContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: sizeAdaption(5),
    marginRight: sizeAdaption(4),
    marginVertical: 16,
    height: sizeAdaption(35),
    width: sizeAdaption(78),
    borderRadius: sizeAdaption(17.5),
  } as ViewStyle,
  liveTextTitle: {
    fontSize: sizeAdaption(15),
    marginLeft: sizeAdaption(4),
  } as TextStyle,
  imageStyles: {
    width: sizeAdaption(35),
    height: sizeAdaption(35),
  } as ImageStyle,
};

export const presets = {
  default: defaultStyles,
};

export type RaceTopViewPresets = keyof typeof presets;
