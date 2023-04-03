import styled from "styled-components";

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Line = styled.hr`
  margin-top: 21px;
`;
export const ValueSection = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
export const FinalizationButton = styled.button`
  width: 235.42px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;

  background: #009edd;
  border-radius: 4px;
  color: white;
  border: none;
`;
export const Total = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #999999;
`;
export const TotalValue = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #2f2e41;
`;
export const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 24px;
`;
export const Header = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  margin-bottom: 21px;
  th {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    text-align: left;

    color: #999999;
  }
`;
