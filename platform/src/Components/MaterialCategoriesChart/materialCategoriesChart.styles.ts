import styled from 'styled-components';

export const Div = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: right;
  color: ${(props) => props.theme.colors.fontGrey};
  width: 100%;
`;

export const Title = styled.h1`
  text-align: left;
  margin-left: 5px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.fontGrey};
`;
export const SubTitle = styled.h3`
  text-align: left;
  margin-left: 5px;
  margin-top: 0px;
  color: ${(props) => props.theme.colors.fontGrey};
`;

export const LineCard = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackgroundTransparent};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 10px;
  z-index: 1000;
  padding: 0px 25px 0px 25px;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.shadow};
  width: 90%;
  max-width: 900px;
`;

export const LineContainer = styled.div`
  height: 270px;
  margin-right: 15px;
`;

export const TimeRangeContainer = styled.div`
  margin: 40px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: none;
`;

export const Option = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 25px;
  text-align: center;
  display: flex;
  font-weight: 700;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.transparentBlack};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.bopsPurple : 'inherit')};

  &:hover {
    font-weight: 800;
    border-bottom: 2px solid ${(props) => props.theme.colors.bopsPurple};
  }
`;

export const NoDataContainer = styled.div`
  width: 830px;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.cardBackgroundTransparent};
  color: ${(props) => props.theme.colors.fontGrey};
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 10px;
`;
