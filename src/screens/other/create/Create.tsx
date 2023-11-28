import React from 'react';

import {Icon} from '@/components/ui/Icon';
import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {isEmpty} from '@/lib/utils';
import {useTheme} from '@/providers/ThemeProvider';
import {TPhotoFromGallery} from '@/types/common';
import {CreateProps} from '@/types/navigation';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Create = (props: CreateProps): React.ReactNode => {
  const {navigation} = props;

  const {isThemeDark} = useTheme();

  const [allPhotos, setAllPhotos] = React.useState<Array<TPhotoFromGallery>>(
    [],
  );

  const [photosCount, setPhotosCount] = React.useState<number>(10);

  const [loadMore, setLoadMore] = React.useState<boolean>(false);

  const [selectedPhoto, setSelectedPhoto] = React.useState<TPhotoFromGallery>();

  const getAllPhotos = async () => {
    let photos: Array<TPhotoFromGallery> = [];

    const response = await CameraRoll.getPhotos({
      first: photosCount,
    });

    response.edges.forEach(item => {
      photos.push(item.node.image);
    });

    setAllPhotos(photos);
    setSelectedPhoto(photos?.at(0));
  };

  React.useEffect(() => {
    getAllPhotos();
  }, [photosCount]);

  React.useEffect(() => {
    setPhotosCount(prev => {
      return prev + 10;
    });
  }, [loadMore]);

  return (
    <ScreenWrapper>
      <View className="flex flex-1 flex-col px-5">
        <View
          key="AppBar"
          className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center gap-5">
            <Icon
              family="AntDesign"
              name="close"
              size={24}
              color={isThemeDark ? 'white' : 'black'}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Text
              className="font-redhatbold text-black dark:text-white"
              style={{
                fontSize: wp(7),
              }}>
              New Post
            </Text>
          </View>
          <Text
            className="font-redhatmedium text-indigo-600"
            style={{fontSize: wp(5)}}>
            Next
          </Text>
        </View>
        <View
          key={'Post'}
          className="flex w-full"
          style={{
            height: hp(50),
          }}>
          {isEmpty(selectedPhoto?.uri) ? (
            <ActivityIndicator color={'blue'} size={24} />
          ) : (
            <Image
              source={{
                uri: selectedPhoto?.uri,
              }}
              className="flex-1 w-full h-full"
              style={{
                resizeMode: 'contain',
              }}
            />
          )}
        </View>
        <View className="flex flex-1 w-full">
          <FlatList
            data={allPhotos}
            numColumns={3}
            onEndReached={() => {
              setLoadMore(true);
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  key={item.uri.slice(0, 10) + index}
                  onPress={() => {
                    setSelectedPhoto(item);
                  }}
                  className="flex w-1/3"
                  style={{
                    height: hp(20),
                  }}>
                  <Image
                    source={{
                      uri: item.uri,
                    }}
                    className="flex-1 w-full h-full"
                    style={{
                      resizeMode: 'contain',
                    }}
                  />
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
