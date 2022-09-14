import React from 'react';
import { View, Image, Text } from 'react-native';
import { images } from '../../theme/images';
import { presets } from './race-list-view.presets';

export const TitleAndNumber = (props: {
  type: string;
  title?: number;
}): JSX.Element => {
  const { type, title } = props;
  const styles = presets.titleAndNumber;
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export const TagWithName = (props: { tagTitle: string; title: string }) => {
  const { tagTitle, title } = props;
  const styles = presets.tagWithTitle;
  return (
    <View style={styles.container}>
      <Text style={styles.tagTitle}>{tagTitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export const RaceListView = (props: any) => {
  const { item } = props;

  const styles = presets.default;
  return (
    <View style={styles.container}>
      <View style={styles.imageAndTextContainer}>
        <Image
          style={styles.imageStyles}
          resizeMode="contain"
          source={images.raceCardUnlikeLight}
        />
        <View style={styles.userIconContainer}>
          <Text style={styles.userRankTitle}>{item.horseNumber}</Text>
          <Image
            style={styles.userIconStyles}
            resizeMode="contain"
            source={images.silkScrDark}
          />
        </View>
        <View style={styles.borderLine} />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.topTextViewContainer}>
          <View style={styles.textTopViewTitleContainer}>
            <Text style={styles.textTopViewTitle}>{item.horseName}</Text>
          </View>
          <View style={styles.topViewRightTitle}>
            <TitleAndNumber type={'W'} title={item.winOdd} />
            <TitleAndNumber type={'P'} title={item.plaOdd} />
            <TitleAndNumber type={'W&P'} />
          </View>
        </View>
        <View style={styles.bottomViewContainer}>
          <TagWithName tagTitle={'J'} title={item.jockeyName} />
          <TagWithName tagTitle={'T'} title={item.trainerName} />
          <TagWithName tagTitle={'Draw'} title={item.draw} />
          <View style={styles.downArrowIconContainer}>
            <Image
              style={styles.downArrowIcon}
              resizeMode="contain"
              source={images.allUpMoreArrowLightIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
