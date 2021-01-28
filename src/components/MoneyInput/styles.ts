import styled from 'styled-components';
import { FiDollarSign } from 'react-icons/fi';

interface PropsStyles {
  width: string;
}

export const Container = styled.form`
  width: ${(props: PropsStyles) => (props.width ? props.width : '272px')};
  height: 81px;

  position: relative;

  display: flex;
  flex-direction: column;

  .MuiInputBase-input {
    padding: 0 0 0 50px;
  }

  .makeStyles-root-1 {
    border: 0;
  }

  .MuiInput-underline:before,
  .MuiInput-underline:after {
    display: none;
  }

  label {
    padding-bottom: 4px;

    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: var(--blueGrayQuinary);
  }

  input {
    width: ${(props: PropsStyles) => (props.width ? props.width : '272px')};
    height: 56px;
    padding-left: 50px;

    /* border: 1px solid var(--blueGraySenary);
    border-radius: 4px; */

    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    color: var(--blueGrayTerciary);

    &::placeholder {
      font-size: 14px;
      font-weight: 400;
      color: var(--blueGrayQuaternary);
    }
  }
`;
