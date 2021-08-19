import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const CarouselHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const LeftContent = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  .liveBtn {
    text-decoration: none;
    background: #e21f43;
    padding: 7px 20px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
`;

export const RightContent = styled.div`
  .navigation {
    background: #8ba0ad;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
    border: none;
  }
`;

export const Card = styled.div`
  margin: 20px 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 4px #888888;
  transition: transform 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  img {
    border-radius: 10px 10px 0px 0px;
  }
  .status {
    background: linear-gradient(to right, #5254e6, #1b1cea);
    font-size: 22px;
    font-weight: 700;
    padding: 10px 20px;
    color: #ffffff;
  }
  .line {
    width: 90%;
    margin: auto;
  }
`;
