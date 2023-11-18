import {Icon} from '@/components/ui/Icon';
import {useTheme} from '@/providers/ThemeProvider';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type PostCardProps = {
  profile_Pic: string;
  userName: string;
  postText?: string;
  postImage?: string;
  commentCount?: number;
  likeCount?: number;
  likedByyou?: boolean;
};

export const PostCard = (props: PostCardProps): React.ReactNode => {
  const {
    profile_Pic,
    userName,
    commentCount,
    likeCount,
    likedByyou,
    postImage,
    postText,
  } = props;

  const {isThemeDark} = useTheme();

  const _renderProfileHeaderBar = () => {
    let fieldBlock: React.ReactNode = <></>;

    fieldBlock = (
      <View className="flex flex-row justify-between items-center w-full">
        <View className="flex flex-row items-center gap-2">
          <View
            className="flex rounded-full items-center justify-center bg-black overflow-hidden"
            style={{
              width: hp(5),
              height: hp(5),
            }}>
            <Image
              source={{uri: profile_Pic}}
              className="flex-1 w-full h-full"
              style={{
                resizeMode: 'cover',
              }}
            />
          </View>
          <Text
            className="font-redhatmedium text-black dark:text-white"
            style={{fontSize: wp(4)}}>
            {userName}
          </Text>
        </View>

        <Icon
          family="MaterialCommunity"
          name="dots-horizontal"
          color={isThemeDark ? 'white' : 'black'}
          size={24}
        />
      </View>
    );

    return fieldBlock;
  };

  const _renderPost = () => {
    let fieldBlock: React.ReactNode = <></>;

    if (postImage || postText) {
      fieldBlock = (
        <View className="flex flex-1 flex-col gap-2 w-full mt-2">
          {postImage && (
            <View
              className="flex items-center justify-center w-full"
              style={{
                height: hp(50),
              }}>
              <Image
                source={{uri: postImage}}
                className="flex-1 w-full h-full"
                style={{
                  resizeMode: 'cover',
                }}
              />
            </View>
          )}
          {postText && (
            <Text
              className="font-redhatmedium text-black dark:text-white"
              style={{fontSize: wp(4)}}>
              {postText}
            </Text>
          )}
        </View>
      );
    }

    return fieldBlock;
  };

  return (
    <View className="flex flex-1 w-full">
      {_renderProfileHeaderBar()}
      {_renderPost()}
    </View>
  );
};
