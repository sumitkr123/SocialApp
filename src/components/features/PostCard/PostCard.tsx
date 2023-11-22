import React from 'react';

import {Icon} from '@/components/ui/Icon';
import {cn} from '@/lib/utils';
import {useTheme} from '@/providers/ThemeProvider';
import {Image, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type PostCardProps = {
  post_id: string;
  profile_Pic: string;
  userName: string;
  postText?: string;
  postImage?: string;
  commentCount?: number;
  likeCount?: number;
  likedByyou?: boolean;
  className?: string;
  parentCommentState?: {
    boxVisible: boolean;
    data: string;
    id: string;
  };
  setParentCommentState?: React.Dispatch<
    React.SetStateAction<{
      boxVisible: boolean;
      data: string;
      id: string;
    }>
  >;
};

export const PostCard = (props: PostCardProps): React.ReactNode => {
  const {
    post_id,
    profile_Pic,
    userName,
    className,
    commentCount,
    likeCount,
    likedByyou,
    postImage,
    postText,
    parentCommentState,
    setParentCommentState,
  } = props;

  const {isThemeDark} = useTheme();

  const [liked, setLiked] = React.useState(likedByyou);

  const [menuVisible, setMenuVisible] = React.useState(false);

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
          onPress={() => {
            setMenuVisible(prev => !prev);
          }}
        />
        {menuVisible && (
          <View
            onTouchEnd={e => e.stopPropagation()}
            className="absolute z-50 right-0 top-8 bg-gray-500 rounded-[8px] px-5 py-3">
            <Text
              style={{fontSize: wp(4)}}
              className="font-redhatmedium text-white">
              ABCD
            </Text>
            <Text
              style={{fontSize: wp(4)}}
              className="font-redhatmedium text-white">
              ABCD
            </Text>
            <Text
              style={{fontSize: wp(4)}}
              className="font-redhatmedium text-white">
              ABCD
            </Text>
          </View>
        )}
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

  const _renderComments = () => {
    if (commentCount) {
      if (commentCount > 1) {
        if (commentCount > 100) {
          return 'View all comments';
        } else {
          return commentCount + ' comments';
        }
      } else {
        return commentCount + ' comment';
      }
    } else {
      return '0 comments';
    }
  };

  const _renderLikes = () => {
    if (likeCount) {
      if (likeCount > 1 && liked) {
        if (likeCount - 1 > 1) {
          if (likeCount - 1 > 1000) {
            return 'You' + ' & 1k+ others';
          } else {
            return 'You' + ' & ' + (likeCount - 1) + ' others';
          }
        } else {
          return 'You' + ' & ' + (likeCount - 1) + ' other';
        }
      } else {
        return likeCount > 1
          ? likeCount > 1000
            ? '1k+ likes'
            : likeCount + ' likes'
          : likeCount + ' like';
      }
    } else {
      return '0 likes';
    }
  };

  const _renderPostFooter = () => {
    let fieldBlock: React.ReactNode = <></>;
    fieldBlock = (
      <View className="flex flex-1 flex-row justify-between w-full mt-3">
        <View className="flex flex-row items-center">
          <Icon
            family="Ionicons"
            name="chatbox"
            color={isThemeDark ? 'white' : 'black'}
            size={24}
            onPress={() => {
              if (setParentCommentState) {
                setParentCommentState({
                  id: post_id,
                  boxVisible: true,
                  data: '',
                });
              }
            }}
          />
          <Text
            className="font-redhatmedium text-gray-600 dark:text-white ml-3 -mt-1"
            style={{
              fontSize: wp(4),
            }}>
            {_renderComments()}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <Text
            className="font-redhatmedium text-gray-600 dark:text-white mr-3"
            style={{
              fontSize: wp(4),
            }}>
            {_renderLikes()}
          </Text>
          <Icon
            family="Ionicons"
            name="heart"
            color={liked ? '#bf0465' : 'gray'}
            size={26}
            onPress={() => setLiked(prev => !prev)}
          />
        </View>
      </View>
    );

    return fieldBlock;
  };

  return (
    <View
      key={post_id}
      className={cn(`flex flex-1 w-full ${className}`)}
      onTouchEnd={e => {
        if (menuVisible) {
          setMenuVisible(false);
        }
        e.stopPropagation();
      }}>
      {_renderProfileHeaderBar()}
      {_renderPost()}
      {_renderPostFooter()}
    </View>
  );
};
