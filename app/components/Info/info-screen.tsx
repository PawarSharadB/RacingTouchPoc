import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/rootReducer';
import { getPosts } from '../../redux/slices/getPostsSlice';

export type InfoScreenProps = {};

export const InfoScreen = (): JSX.Element => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useAppDispatch();

  console.log('posts======================== ', posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return <View></View>;
};
