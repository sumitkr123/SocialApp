import React, {RefObject} from 'react';

import {Input} from '@/components/ui/Input';
import {cn} from '@/lib/utils';
import {InputProps} from '@/types/common';
import {Modal, TextInput, View} from 'react-native';

type CommentBoxProps = {
  visible: boolean;
  className?: string;
} & InputProps;

export const CommentBox = React.forwardRef(
  (
    props: CommentBoxProps,
    ref: React.Ref<TextInput> | undefined,
  ): React.ReactNode => {
    const {type, inputMode, className, visible, ...rest} = props;

    React.useEffect(() => {
      if (visible) {
        const newRef = ref as RefObject<TextInput>;
        setTimeout(() => newRef.current?.focus(), 50);
      }
    }, [visible]);

    return (
      <Modal visible={visible} transparent={true}>
        <View className={'absolute z-50 w-full bottom-0 px-3'}>
          <Input
            ref={ref}
            type={type}
            placeholderTextColor={'black'}
            inputMode={inputMode || 'text'}
            className={cn(
              `flex flex-1 w-full border-indigo-600 rounded-md`,
              className,
              visible === false && 'hidden',
            )}
            {...rest}
          />
        </View>
      </Modal>
    );
  },
);
