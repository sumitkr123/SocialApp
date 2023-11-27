import React from 'react';

import {Icon} from '@/components/ui/Icon';
import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {useTheme} from '@/providers/ThemeProvider';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
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

const FILTERS = [
  {
    title: 'Original',
    filterComponent: AdenCompat,
  },
  {
    title: 'Aden',
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
    title: '_1977',
    filterComponent: _1977Compat,
  },
  {
    title: 'Brannan',
    filterComponent: BrannanCompat,
  },
];

type ImageFilterProps = {};

export const ImageFilter = (props: ImageFilterProps): React.ReactNode => {
  const {isThemeDark} = useTheme();

  const [uriArr, setUriArr] = React.useState<Array<{index: any; uri: string}>>(
    [],
  );

  const [selectedFilterIndex, setIndex] = React.useState(0);

  const _onExtractImage = (
    nativeEvent: {
      uri: string;
    },
    index: number,
  ) => {
    setUriArr(prev => {
      const newPrev = prev.filter(item => item.index !== index);
      return [...newPrev, {index: index, uri: nativeEvent.uri}];
    });
  };

  const _onSelectFilter = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const _renderFilterComponent = ({
    item,
    index,
  }: {
    item: {title: string; filterComponent: typeof AdenCompat};
    index: number;
  }) => {
    const FilterComponent = item.filterComponent;

    const image = (
      <Image
        style={{
          width: wp(30),
          height: wp(30),
        }}
        source={{uri: uri}}
        resizeMode={'contain'}
      />
    );

    return (
      <Pressable
        className="items-center mr-5"
        onPress={() => _onSelectFilter(index)}>
        {item.title === 'Original' ? (
          <Image
            style={{
              width: wp(30),
              height: wp(30),
            }}
            source={{uri: uri}}
            resizeMode={'contain'}
          />
        ) : (
          <FilterComponent
            onExtractImage={({nativeEvent}) =>
              _onExtractImage(nativeEvent, index)
            }
            extractImageEnabled={true}
            image={image}
          />
        )}
        <Text
          className="font-redhatmedium text-black fark:text-white"
          style={{
            fontSize: wp(4),
          }}>
          {item.title}
        </Text>
      </Pressable>
    );
  };

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
            onPress={() => {}}
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
                uri:
                  uriArr.find(item => item.index === selectedFilterIndex)
                    ?.uri ?? uri,
              }}
              className="flex-1 w-full h-full"
              style={{
                resizeMode: 'contain',
              }}
            />
          </View>

          <FlatList
            data={FILTERS}
            horizontal={true}
            scrollToOverflowEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.title}
            renderItem={_renderFilterComponent}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
