import React from 'react';

import {PostCard} from '@/components/features/PostCard';
import {Icon} from '@/components/ui/Icon';
import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {useTheme} from '@/providers/ThemeProvider';
import {HomeProps} from '@/types/navigation';
import {StaticTexts} from '@/utils';
import {FlatList, Pressable, ScrollView, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Home = (props: HomeProps): React.ReactNode => {
  const {route, navigation} = props;

  const {isThemeDark} = useTheme();

  const _renderYou = (item: any) => {
    return (
      <View className="flex w-full items-center">
        <View
          className="rounded-full border-black dark:border-white border-[0.5px] items-center justify-center overflow-hidden"
          style={{
            width: hp(9.5),
            height: hp(9.5),
          }}>
          <View
            className="rounded-full border-black dark:border-white border-[0.5px] items-center justify-center"
            style={{
              width: hp(8),
              height: hp(8),
            }}>
            <Icon
              family={'MaterialCommunity'}
              name={'plus'}
              size={24}
              color={isThemeDark ? 'white' : 'black'}
            />
          </View>
        </View>
        <Text
          numberOfLines={1}
          className="font-redhatmedium text-black dark:text-white mt-2"
          style={{fontSize: wp(4)}}>
          {item.userName}
        </Text>
      </View>
    );
  };

  const _renderOthers = (item: any) => {
    return (
      <View className="flex w-full items-center">
        <View
          className="rounded-full border-indigo-600 border-2 items-center justify-center overflow-hidden"
          style={{
            width: hp(9.5),
            height: hp(9.5),
          }}>
          <View
            className="flex rounded-full items-center justify-center bg-black overflow-hidden"
            style={{
              width: hp(8),
              height: hp(8),
            }}>
            <Animated.Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/08/14/11/09/hand-1592415_640.jpg',
              }}
              className="flex-1 w-full h-full"
              style={{
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
        <Text
          numberOfLines={1}
          className="font-redhatmedium text-black dark:text-white mt-2"
          style={{fontSize: wp(4)}}>
          {item.userName}
        </Text>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '30%'}}>
        <View
          key={'Header'}
          className="flex flex-row justify-center items-center mt-7 px-5">
          <View className="flex flex-row flex-1 justify-center items-center">
            <Text
              className="font-redhatextrabold text-black dark:text-white"
              style={{fontSize: wp(7.6)}}>
              {StaticTexts.AppName}
            </Text>
          </View>
          <Icon
            family={'Ionicons'}
            name={'notifications'}
            size={24}
            color={isThemeDark ? 'white' : 'black'}
          />
        </View>
        <View key={'Stories'} className="flex overflow-hidden px-5 mt-7">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              gap: 15,
            }}
            data={[
              {
                userName: 'You',
              },
              {
                userName: 'marioo_.123',
              },
              {
                userName: 'mini_.123',
              },
              {
                userName: 'micky_.123',
              },
              {
                userName: 'mikey_.123',
              },
            ]}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  className="flex flex-col justify-center items-center"
                  style={{
                    width: hp(10),
                  }}
                  onPress={() => {}}>
                  {index === 0 ? _renderYou(item) : _renderOthers(item)}
                </Pressable>
              );
            }}
          />
        </View>

        <View key={'Posts'} className="flex flex-1 px-5 mt-10">
          <PostCard
            profile_Pic={
              'https://cdn.pixabay.com/photo/2016/08/14/11/09/hand-1592415_640.jpg'
            }
            userName={'dummy_user123'}
            postImage="https://cdn.pixabay.com/photo/2016/08/14/11/09/hand-1592415_640.jpg"
            postText="This is loremn Lorem ipsum dolor poster djksfjk asdfgaju asuidfghju sduikgfuias asuidfuias uiksdghfuiasdhfkasdfknasjkn"
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
