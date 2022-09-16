import React, { useEffect } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { images } from '../../theme/images';
import { palette } from '../../theme/pallete';
import { convertMeetingNameShort } from '../../utils/commonMethods';
import { sizeAdaption } from '../../utils/measurements';
import { meetings, currentAllRaces } from '../../utils/sampleData';
import { CircleButton } from '../CircleButton/circle-button';
import { RaceListView } from '../RaceListView/race-list-view';
import { Header } from '../raceViewHeader/header';
import { presets as racePresets } from './race-screen.presets';
import { RaceTopView } from './race-top-view';
import { raceData } from '../../utils/raceData';
import { StartupTime } from 'react-native-startup-time';
import { RootState, useAppDispatch } from '../../redux/rootReducer';
import { getPosts } from '../../redux/slices/getPostsSlice';

const color = palette;

export function AllTitleView(): JSX.Element {
  return (
    <CircleButton
      key={'AllKey'}
      text={'All'}
      index={-1}
      textSize={16}
      size={sizeAdaption(44)}
      isBrownTrack={false}
    />
  );
}

export function ColoredBoxWithText({ title, backgroundColor }): JSX.Element {
  const styles = racePresets.footer;
  return (
    <View style={[styles.itemWrap]}>
      <View style={[styles.item, { backgroundColor: backgroundColor }]} />
      <View>
        <Text style={[styles.text, { color: color.textColor }]}>{title}</Text>
      </View>
    </View>
  );
}

export function FooterComponent(): JSX.Element {
  const styles = racePresets.footer;
  return (
    <View style={styles.container}>
      <ColoredBoxWithText
        title={'Favorite'}
        backgroundColor={color.oddsHotColor}
      />
      <ColoredBoxWithText
        title={'Odds Drop by 20%'}
        backgroundColor={color.oddsDrp20Color}
      />
      <ColoredBoxWithText
        title={'Odds Drop by 50%'}
        backgroundColor={color.oddsDrp50Color}
      />
    </View>
  );
}

export function RaceDetailsView(): JSX.Element {
  const styles = racePresets.raceDetails;
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={styles.detailsTextTitle}>
          26/04/2021, MON, 13:50, England, G1, 1200M, TURF
        </Text>
      </View>
      <View style={styles.borderLine} />
      <View style={styles.textAndImageContainer}>
        <Text style={styles.winOrPlaceTitle}>Win/Place</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyles}
            resizeMode="contain"
            source={images.allUpMoreArrowLightIcon}
          />
        </View>
      </View>
    </View>
  );
}

const meetingsView = (meetingsData: any) => {
  const styles = racePresets.default;

  const meetingsCount = meetingsData.length > 2 ? 2.5 : meetingsData.length;
  const meetingCircleWidth = Math.min(
    sizeAdaption(46) * 3.3,
    sizeAdaption(46) * meetingsCount,
  );

  return (
    <View style={{ width: meetingCircleWidth }}>
      <FlatList
        initialNumToRender={meetingsData.length}
        scrollEnabled={meetingsData.length > 2}
        horizontal={true}
        data={meetingsData}
        keyExtractor={(item, index) => `mt_${index}`}
        contentContainerStyle={styles.circleListStyle}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index, item: meeting }) => {
          return (
            <View>
              <CircleButton
                key={index + meeting?.id}
                text={`${convertMeetingNameShort(meeting?.venCode)}`}
                index={index}
                textSize={16}
                size={sizeAdaption(43)}
                isBrownTrack={false}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const currentAllRacesView = (currentAllRaces: any) => {
  const styles = racePresets.default;

  const currentAllRacesCount =
    currentAllRaces.length > 2 ? 2.5 : currentAllRaces.length;
  const meetingCircleWidth = Math.min(
    sizeAdaption(46) * 3.3,
    sizeAdaption(46) * currentAllRacesCount,
  );

  return (
    <View style={{ width: meetingCircleWidth }}>
      <FlatList
        initialNumToRender={currentAllRaces.length}
        scrollEnabled={currentAllRaces.length > 2}
        horizontal={true}
        data={currentAllRaces}
        keyExtractor={(item, index) => `mt_${index}`}
        contentContainerStyle={styles.circleListStyle}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<AllTitleView />}
        renderItem={({ index, item: meeting }) => {
          return (
            <View>
              <CircleButton
                key={index + meeting?.id}
                text={`${convertMeetingNameShort(meeting?.venCode)}`}
                index={index}
                textSize={16}
                size={sizeAdaption(43)}
                isBrownTrack={false}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const RenderItem = ({ item }: { index: number; item: any }) => {
  return <RaceListView item={item} />;
};

export const RaceScreen = () => {
  // const posts = useSelector((state: RootState) => state.posts);
  // const dispatch = useAppDispatch();

  //console.log('posts======================== ', posts);
  const styles = racePresets.default;
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, []);
  return (
    <View>
      <Header />
      <View style={styles.topViewContainer}>
        <RaceTopView />
        <View style={styles.circleButtonContainer}>
          {meetingsView(meetings)}
          <View
            style={[
              styles.raceCircleButtonContainer,
              { borderColor: color.lineColor2 },
            ]}>
            {currentAllRacesView(currentAllRaces)}
          </View>
        </View>
      </View>

      <RaceDetailsView />
      <StartupTime
        ready={true /* optional, defaults to true */}
        style={
          {
            marginTop: 4,
          } /* optional*/
        }
      />
      <View style={{ marginHorizontal: 8 }}>
        <FlatList
          data={raceData}
          scrollEnabled={raceData.length > 2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.horseNumber}
          renderItem={RenderItem}
          ListFooterComponent={<FooterComponent />}
          contentContainerStyle={{ paddingBottom: 300 }}
        />
      </View>
    </View>
  );
};
