import styled from 'styled-components';

export const Container = styled.div`
  width: 192px;
  height: 81px;

  display: flex;
  flex-direction: column;

  font-family: 'Work Sans', sans-serif;

  label {
    padding-bottom: 4px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: var(--blueGrayTerciary);
  }
`;

export const MonthAndYear = styled.div`
  width: 192px;
  height: 56px;
  padding-left: 10px;

  border: 1px solid var(--blueGraySenary);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .month-name {
    font-weight: 700;
    font-size: 16px;
    color: var(--blueGrayQuinary);

    padding-bottom: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
