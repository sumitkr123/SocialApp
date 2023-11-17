import React from 'react';

import {Button} from '@/components/ui/Button';
import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

type ProfileProps = {};

export const Profile = (props: ProfileProps): React.ReactNode => {
  return (
    <ScreenWrapper>
      <View className="flex flex-1 flex-col justify-center px-5">
        <Text className="font-redhatmedium text-black dark:text-white mx-auto">
          Profile
        </Text>
        <Button
          title="Log-out"
          variant="filled"
          className="mt-5"
          style={{height: hp(8.5)}}
          textProps={{
            style: {
              fontSize: hp(2.45),
            },
            className: 'font-redhatbold',
          }}
          onPress={() => {}}
        />
      </View>
    </ScreenWrapper>
  );
};
