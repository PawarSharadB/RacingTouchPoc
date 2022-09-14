import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { palette } from '../../theme/pallete';
import { sizeAdaption } from '../../utils/measurements';
import fonts from '../../theme/fonts/index';

const color = palette;

const defaultStyles = {
  container: {
    backgroundColor: color.white.number0,
    flexDirection: 'row',
    borderRadius: 4,
    marginTop: 8,
  } as ViewStyle,
  imageAndTextContainer: { flexDirection: 'row' } as ViewStyle,
  dataContainer: { flex: 1 } as ViewStyle,
  imageStyles: {
    width: sizeAdaption(14),
    height: sizeAdaption(18),
    marginLeft: 3,
  } as ImageStyle,
  userIconStyles: {
    width: sizeAdaption(21),
    height: sizeAdaption(27),
  },
  userIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  userRankTitle: {
    fontSize: 18,
    color: color.darkBlue,
    fontFamily: fonts.FontFamily.Medium,
  } as TextStyle,
  borderLine: {
    borderWidth: 1,
    borderColor: '#848484',
    marginVertical: 8,
    marginHorizontal: 11,
  } as ViewStyle,
  topTextViewContainer: {
    marginVertical: 8,
    flexDirection: 'row',
  } as ViewStyle,
  textTopViewTitleContainer: { alignSelf: 'flex-start' } as ViewStyle,
  textTopViewTitle: {
    fontSize: 15,
    color: '#09254E',
    lineHeight: 17,
    fontFamily: fonts.FontFamily.Medium,
  },
  topViewRightTitle: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 4,
  } as ViewStyle,
  bottomViewContainer: {
    flex: 1,
    flexDirection: 'row',
  } as ViewStyle,
  downArrowIcon: {
    width: sizeAdaption(14),
    height: sizeAdaption(8),
  } as ImageStyle,
  downArrowIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
};

const titleAndNumberStyles = {
  container: {
    backgroundColor: '#Cee8f3',
    paddingHorizontal: 16,
    marginLeft: 8,
    justifyContent: 'center',
    borderRadius: 4,
  } as ViewStyle,
  type: {
    fontSize: 8,
    textAlign: 'center',
    fontFamily: fonts.FontFamily.Medium,
  } as TextStyle,
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.FontFamily.Medium,
  } as TextStyle,
};

const tagWithTitleStyles = {
  container: {
    //Remove commented code for ios
    //padding: 8,
    flexDirection: 'row',
  } as ViewStyle,
  tagTitle: {
    fontSize: 11,
    backgroundColor: '#D3D3D3',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 4,
    textAlign: 'center',
    // for ios no need height
    height: 30,
    fontFamily: fonts.FontFamily.Medium,
  } as TextStyle,
  title: {
    fontSize: 11,
    marginRight: 4,
    fontFamily: fonts.FontFamily.Medium,
    flexWrap: 'wrap',
  } as TextStyle,
};

export const presets = {
  default: defaultStyles,
  titleAndNumber: titleAndNumberStyles,
  tagWithTitle: tagWithTitleStyles,
};

export type RaceListViewPresets = keyof typeof presets;
