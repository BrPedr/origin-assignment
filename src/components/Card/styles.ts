import styled from 'styled-components';

export const Container = styled.div`
  width: 560px;
  height: 511px;
  padding: 35px 40px 32px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--neutralWhite);

  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
`;

export const Header = styled.header`
  width: 480px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    padding-left: 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  h2 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;

    color: var(--blueGrayQuinary);
  }

  span {
    font-family: 'Work Sans', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: var(--blueGrayPrimary);
  }
`;

export const MonthlyAmount = styled.div`
  width: 480px;
  height: 158px;
  margin: 24px 0 32px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: 1px solid var(--blueGraySenary);
  box-sizing: border-box;
  border-radius: 8px;

  font-family: 'Work Sans', sans-serif;

  .money {
    color: var(--brandColorSecondary);
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
  }

  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h2 {
      padding: 0 32px;

      font-size: 20px;
      font-weight: normal;
      color: var(--blueGrayQuinary);
    }
  }
`;

export const Details = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 32px;

  background: var(--blueGraySecondary);

  display: flex;
  justify-content: center;

  font-family: 'Work Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  span + strong {
    align-self: stretch;
  }
`;
