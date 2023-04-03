import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0px;
  gap: 32px;

  background: #ffffff;
  border-radius: 4px;

  max-width: 960px;
`;
export const Image = styled.img``;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #2f2e41;
`;
export const Button = styled.button`
  background: #009edd;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 14px;
  width: 180px;
  height: 40px;
`;
