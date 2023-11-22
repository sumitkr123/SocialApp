import React from 'react';

import {StoryScreenProps} from '@/types/navigation';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

export const StoryScreen = (props: StoryScreenProps): React.ReactNode => {
  return (
    <View className="flex flex-col flex-1">
      <Text>StoryScreen</Text>
      <Animated.Image
        sharedTransitionTag="tag"
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/08/14/11/09/hand-1592415_640.jpg',
        }}
        style={{
          resizeMode: 'cover',
          width: 300,
          height: 300,
        }}
      />
    </View>
  );
};
