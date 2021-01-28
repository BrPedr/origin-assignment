import * as React from 'react';
import NumberFormat from 'react-number-format';

const NumberFormatCustom: React.FC = (props: any) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      isNumericString
      allowNegative={false}
      decimalScale={2}
    />
  );
};

export default NumberFormatCustom;
