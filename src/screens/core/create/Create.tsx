import React from 'react';

import {Icon} from '@/components/ui/Icon';
import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {useTheme} from '@/providers/ThemeProvider';
import {CreateProps} from '@/types/navigation';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
// import {
//   Achromatomaly,
//   Achromatopsia,
//   AdenCompat,
//   BoxBlur,
// } from 'react-native-image-filter-kit';
import {StyleSheet} from 'react-native';
import {
  AdenCompat,
  BrannanCompat,
  BrooklynCompat,
  ClarendonCompat,
  EarlybirdCompat,
  GinghamCompat,
  HudsonCompat,
  InkwellCompat,
  KelvinCompat,
  LarkCompat,
  LofiCompat,
  MavenCompat,
  MayfairCompat,
  MoonCompat,
  NashvilleCompat,
  PerpetuaCompat,
  ReyesCompat,
  RiseCompat,
  SlumberCompat,
  StinsonCompat,
  ToasterCompat,
  ValenciaCompat,
  WaldenCompat,
  WillowCompat,
  Xpro2Compat,
  _1977Compat,
} from 'react-native-image-filter-kit';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const uri =
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D';

type FilterIdsType =
  | 'Achromatopsia'
  | 'AdenCompat'
  | 'Achromatomaly'
  | 'BoxBlur';

const FILTERS = [
  {
    title: 'Normal',
    filterComponent: AdenCompat,
  },
  {
    title: 'Maven',
    filterComponent: MavenCompat,
  },
  {
    title: 'Mayfair',
    filterComponent: MayfairCompat,
  },
  {
    title: 'Moon',
    filterComponent: MoonCompat,
  },
  {
    title: 'Nashville',
    filterComponent: NashvilleCompat,
  },
  {
    title: 'Perpetua',
    filterComponent: PerpetuaCompat,
  },
  {
    title: 'Reyes',
    filterComponent: ReyesCompat,
  },
  {
    title: 'Rise',
    filterComponent: RiseCompat,
  },
  {
    title: 'Slumber',
    filterComponent: SlumberCompat,
  },
  {
    title: 'Stinson',
    filterComponent: StinsonCompat,
  },
  {
    title: 'Brooklyn',
    filterComponent: BrooklynCompat,
  },
  {
    title: 'Earlybird',
    filterComponent: EarlybirdCompat,
  },
  {
    title: 'Clarendon',
    filterComponent: ClarendonCompat,
  },
  {
    title: 'Gingham',
    filterComponent: GinghamCompat,
  },
  {
    title: 'Hudson',
    filterComponent: HudsonCompat,
  },
  {
    title: 'Inkwell',
    filterComponent: InkwellCompat,
  },
  {
    title: 'Kelvin',
    filterComponent: KelvinCompat,
  },
  {
    title: 'Lark',
    filterComponent: LarkCompat,
  },
  {
    title: 'Lofi',
    filterComponent: LofiCompat,
  },
  {
    title: 'Toaster',
    filterComponent: ToasterCompat,
  },
  {
    title: 'Valencia',
    filterComponent: ValenciaCompat,
  },
  {
    title: 'Walden',
    filterComponent: WaldenCompat,
  },
  {
    title: 'Willow',
    filterComponent: WillowCompat,
  },
  {
    title: 'Xpro2',
    filterComponent: Xpro2Compat,
  },
  {
    title: 'Aden',
    filterComponent: AdenCompat,
  },
  {
    title: '_1977',
    filterComponent: _1977Compat,
  },
  {
    title: 'Brannan',
    filterComponent: BrannanCompat,
  },
];

export const Create = (props: CreateProps): React.ReactNode => {
  const {route, navigation} = props;

  const {isThemeDark} = useTheme();

  const [filteredOriginal, setFilteredOriginal] = React.useState<string>(uri);

  const extractedUri = React.useRef<string>(uri);

  const [uriArr, setUriArr] = React.useState<Array<{index: any; uri: string}>>(
    [],
  );

  const [selectedFilterIndex, setIndex] = React.useState(0);
  const onExtractImage = (nativeEvent, index) => {
    // extractedUri.current = nativeEvent.uri;
    setUriArr(prev => {
      const newPrev = prev.filter(item => item.index !== index);
      return [...newPrev, {index: index, uri: nativeEvent.uri}];
    });
  };

  const onSelectFilter = selectedIndex => {
    setIndex(selectedIndex);
    // setFilteredOriginal(extractedUri.current);
  };

  const renderFilterComponent = ({item, index}) => {
    const FilterComponent = item.filterComponent;
    const image = (
      <Image
        style={styles.filterSelector}
        source={{uri: uri}}
        resizeMode={'contain'}
      />
    );
    return (
      <TouchableOpacity onPress={() => onSelectFilter(index)}>
        <Text style={styles.filterTitle}>{item.title}</Text>
        <FilterComponent
          onExtractImage={({nativeEvent}) => onExtractImage(nativeEvent, index)}
          extractImageEnabled={true}
          image={image}
        />
      </TouchableOpacity>
    );
  };
  const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;

  // const [filteredPhotos, setFilteredPhotos] = React.useState<
  //   Array<{
  //     id: FilterIdsType;
  //     uri: string;
  //     error: 'YES' | 'NO';
  //   }>
  // >([
  //   {
  //     id: 'Achromatopsia',
  //     uri: '',
  //     error: 'NO',
  //   },
  //   {
  //     id: 'AdenCompat',
  //     uri: '',
  //     error: 'NO',
  //   },
  //   {
  //     id: 'Achromatomaly',
  //     uri: '',
  //     error: 'NO',
  //   },
  //   {
  //     id: 'BoxBlur',
  //     uri: '',
  //     error: 'NO',
  //   },
  // ]);

  // const _onFilteringError = (id: FilterIdsType) => {
  //   return setFilteredPhotos(prev => {
  //     let newprev = prev.filter(item => item.id !== id);
  //     return [...newprev, {id: id, uri: '', error: 'YES'}];
  //   });
  // };

  // const _onExtractImage = (id: FilterIdsType, nativeEvent: {uri: string}) => {
  //   setFilteredPhotos(prev => {
  //     let newprev = prev.filter(item => item.id !== id);
  //     return [...newprev, {id: id, uri: nativeEvent.uri, error: 'NO'}];
  //   });
  // };

  // const _helperJSXForFilterPhoto = () => {
  //   return (
  //     <>
  //       <Achromatopsia
  //         extractImageEnabled={true}
  //         onFilteringError={() => _onFilteringError('Achromatopsia')}
  //         onExtractImage={({nativeEvent}) =>
  //           _onExtractImage('Achromatopsia', nativeEvent)
  //         }
  //         image={<Image source={{uri: uri}} />}
  //       />
  //       <AdenCompat
  //         extractImageEnabled={true}
  //         onFilteringError={() => _onFilteringError('AdenCompat')}
  //         onExtractImage={({nativeEvent}) =>
  //           _onExtractImage('AdenCompat', nativeEvent)
  //         }
  //         image={<Image source={{uri: uri}} />}
  //       />
  //       <Achromatomaly
  //         extractImageEnabled={true}
  //         onFilteringError={() => _onFilteringError('Achromatomaly')}
  //         onExtractImage={({nativeEvent}) =>
  //           _onExtractImage('Achromatomaly', nativeEvent)
  //         }
  //         image={<Image source={{uri: uri}} />}
  //       />
  //       <BoxBlur
  //         extractImageEnabled={true}
  //         onFilteringError={() => _onFilteringError('BoxBlur')}
  //         onExtractImage={({nativeEvent}) =>
  //           _onExtractImage('BoxBlur', nativeEvent)
  //         }
  //         image={<Image source={{uri: uri}} />}
  //       />
  //     </>
  //   );
  // };

  return (
    <ScreenWrapper>
      <View className="flex flex-1 flex-col px-5">
        <View
          key="AppBar"
          className="flex flex-row items-center justify-between mt-5">
          <Icon
            family="AntDesign"
            name="arrowleft"
            size={24}
            color={isThemeDark ? 'white' : 'black'}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text
            className="font-redhatbold text-black dark:text-white"
            style={{
              fontSize: wp(8),
            }}>
            Make a Post
          </Text>
          <Text style={{fontSize: 24}}></Text>
        </View>
        <View key={'ImageEditing'} className="flex flex-1 items-center mt-10">
          <View
            className="w-full"
            style={{
              height: hp(50),
            }}>
            <Image
              source={{
                uri: uriArr[selectedFilterIndex]?.uri,
              }}
              className="flex-1 w-full h-full"
              style={{
                resizeMode: 'contain',
              }}
            />
          </View>
          {/* <FlatList
            horizontal
            data={filteredPhotos}
            scrollToOverflowEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  key={item.id}
                  className="items-center mr-5"
                  onPress={() => {
                    setFilteredOriginal(item.uri);
                  }}>
                  {item.error === 'NO' && item.uri !== '' && (
                    <>
                      <View
                        className="w-full"
                        style={{
                          width: wp(35),
                          height: wp(35),
                        }}>
                        <Image
                          source={{uri: item.uri}}
                          className="flex-1 w-full h-full"
                          style={{
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <Text
                        className="font-redhatmedium text-black fark:text-white"
                        style={{
                          fontSize: wp(4),
                        }}>
                        {item.id}
                      </Text>
                    </>
                  )}
                </Pressable>
              );
            }}
          /> */}

          {/* {selectedFilterIndex === 0 ? (
            <View
              className="w-full"
              style={{
                height: hp(50),
              }}>
              <Image
                source={{
                  uri: uri,
                }}
                className="flex-1 w-full h-full"
                style={{
                  resizeMode: 'contain',
                }}
              />
            </View>
          ) : (
            <SelectedFilterComponent
              onExtractImage={onExtractImage}
              extractImageEnabled={true}
              image={
                <Image
                  style={styles.image}
                  source={{uri: uri}}
                  resizeMode={'contain'}
                />
              }
            />
          )} */}
          <FlatList
            data={FILTERS}
            keyExtractor={item => item.title}
            horizontal={true}
            renderItem={renderFilterComponent}
          />
        </View>
      </View>
      {/* {_helperJSXForFilterPhoto()} */}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 520,
    height: 520,
    marginVertical: 10,
    alignSelf: 'center',
  },
  filterSelector: {
    width: 100,
    height: 100,
    margin: 5,
  },
  filterTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
