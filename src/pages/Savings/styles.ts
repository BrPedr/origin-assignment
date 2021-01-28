import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--blueGraySecondary);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 48px 0 24px 0;

    color: var(--brandColorPrimary);
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    text-align: center;

    span {
      font-weight: 600;
    }
  }
`;
