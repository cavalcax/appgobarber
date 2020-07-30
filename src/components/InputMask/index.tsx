import React, { useState, useCallback, forwardRef } from 'react';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

import Input from '../Input';

interface InputMaskProps extends TextInputMaskProps {
  name: string;
  icon: string;
  rawValue?: string;
  containerStyle?: {};
}

interface InputMaskRef {
  focus(): void;
}

const InputMask: React.RefForwardingComponent<InputMaskRef, InputMaskProps> = (
  { type, ...rest },
  ref,
) => {
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue);
    setRawValue(unmaskedValue);
  }, []);

  return (
    <TextInputMask
      refInput={Input}
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref,
        rawValue,
        ...rest,
      }}
      {...rest}
    />
  );
};
export default forwardRef(InputMask);
