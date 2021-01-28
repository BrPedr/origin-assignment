import * as React from 'react';
import { FiDollarSign } from 'react-icons/fi';
import TextField from '@material-ui/core/TextField';

import NumberFormatCustom from './NumberFormatCustom';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from './styles';

interface Props {
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  width?: string;
  placeholder?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '272px',
      height: '56px',
      border: '1px solid var(--blueGraySenary)',
      borderRadius: '4px'
    }
  }
}));

const MoneyInput: React.FC<Props> = ({
  width,
  title,
  placeholder,
  setTotalAmount
}) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    numberformat: '0'
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  React.useEffect(() => {
    setTotalAmount(Number(values.numberformat) || 0);
  }, [values]);

  return (
    <Container width={width}>
      <FiDollarSign
        size={24}
        color={'var(--blueGrayQuaternary)'}
        style={{ position: 'absolute', bottom: '16px', left: '17px' }}
      />
      <label>{title}</label>
      <div className={classes.root}>
        <TextField
          className={classes.root}
          value={values.numberformat}
          onChange={handleChange}
          name="numberformat"
          id="formatted-numberformat-input"
          placeholder={placeholder}
          InputProps={{
            inputComponent: NumberFormatCustom
          }}
        />
      </div>
    </Container>
  );
};

export default MoneyInput;
