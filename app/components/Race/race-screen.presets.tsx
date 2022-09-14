import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { palette } from '../../theme/pallete';
import { isIOS, sizeAdaption } from '../../utils/measurements';

const color = palette;
const defaultStyles = {
  topViewContainer: { flexDirection: 'row' } as ViewStyle,
  circleButtonContainer: {
    flexDirection: 'row',
    paddingVertical: sizeAdaption(3),
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  circleListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  raceCircleButtonContainer: {
    flex: 1,
    borderLeftWidth: 1,
    flexDirection: 'row',
  } as ViewStyle,
  listFooterViewOther: { height: sizeAdaption(200), flex: 2 } as ViewStyle,
};

const raceDetailsStyles = {
  container: {
    flexDirection: 'row',
    backgroundColor: color.white.number0,
    paddingHorizontal: 16,
    paddingVertical: 8,
  } as ViewStyle,
  imageStyles: {
    width: sizeAdaption(16),
    height: sizeAdaption(16),
  } as ImageStyle,
  textAndImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  winOrPlaceTitle: {
    fontSize: 15,
    color: color.newMeetingVenueBackground,
    lineHeight: 15,
    fontWeight: 'bold',
  } as TextStyle,
  imageContainer: {
    backgroundColor: '#FEC107',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginLeft: 8,
  } as ViewStyle,
  borderLine: {
    borderLeftWidth: 1,
    flexDirection: 'row',
    paddingLeft: 8,
  } as ViewStyle,
  detailsTextTitle: { fontSize: 15, fontWeight: '500' } as TextStyle,
};

const footerStyles = {
  container: {
    flexDirection: 'row',
    marginTop: sizeAdaption(6),
    flexWrap: 'wrap',
    paddingBottom: 200,
  } as ViewStyle,
  itemWrap: {
    marginRight: sizeAdaption(16),
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  item: {
    width: sizeAdaption(12),
    height: sizeAdaption(12),
    marginRight: sizeAdaption(5),
  } as ViewStyle,
  text: {
    fontSize: isIOS ? sizeAdaption(12) : sizeAdaption(11),
  } as TextStyle,
};

export const presets = {
  default: defaultStyles,
  raceDetails: raceDetailsStyles,
  footer: footerStyles,
};

export type RaceViewPresets = keyof typeof presets;
