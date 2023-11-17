import React from 'react';

import {Icon} from '@/components/ui/Icon';
import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {ToolTip} from '@/components/ui/ToolTip';
import {useTheme} from '@/providers/ThemeProvider';
import {HomeProps} from '@/types/navigation';
import {tAppName} from '@/utils';
import {FlatList, Pressable, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

export const Home = (props: HomeProps): React.ReactNode => {
  const {route, navigation} = props;

  const {isThemeDark} = useTheme();

  const _renderYou = (item: any) => {
    return (
      <>
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
          className="font-redhatmedium text-black dark:text-white mt-2"
          style={{fontSize: wp(4)}}>
          {item.userName}
        </Text>
      </>
    );
  };

  const _renderOthers = (item: any) => {
    return (
      <>
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
          className="font-redhatmedium text-black dark:text-white mt-2"
          style={{fontSize: wp(4)}}>
          {item.userName}
        </Text>
      </>
    );
  };

  return (
    <ScreenWrapper>
      <View
        key={'Header'}
        className="flex flex-row justify-center items-center mt-7 px-5">
        <View className="flex flex-row flex-1 justify-center items-center">
          <Text
            className="font-redhatextrabold text-black dark:text-white"
            style={{fontSize: wp(7.6)}}>
            {tAppName}
          </Text>
        </View>
        <ToolTip text={'Notification'}>
          <Icon
            onPress={() => {
              console.log('hello');
            }}
            family={'Ionicons'}
            name={'notifications'}
            size={24}
            color={isThemeDark ? 'white' : 'black'}
          />
        </ToolTip>
      </View>
      <View key={'Stories'} className="flex overflow-hidden px-[17px] mt-7">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 14,
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
              userName: 'mickey_.123',
            },
            {
              userName: 'mikey_.123',
            },
          ]}
          renderItem={({item, index}) => {
            return (
              <Pressable
                className="flex flex-col justify-center items-center"
                onPress={() => {
                  // navigation.navigate('')
                  Toast.show({
                    type: 'success',
                    text1: 'Success',
                    text2: 'This is some message 👋',
                    position: 'bottom',
                  });
                }}>
                {index === 0 ? _renderYou(item) : _renderOthers(item)}
              </Pressable>
            );
          }}
        />
      </View>
    </ScreenWrapper>
  );
};
