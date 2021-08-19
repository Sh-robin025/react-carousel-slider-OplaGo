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
  @media only screen and (max-width: 500px) {
    display: inline-block;
    .liveBtn {
      font-size: 15px;
    }
    h3 {
      margin-top: 10px;
    }
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
  .status_blue {
    background: linear-gradient(to right, #5a7ef5, #1e2dbb);
    font-size: 22px;
    font-weight: 700;
    padding: 10px 20px;
    color: #ffffff;
  }
  .status_green {
    background: linear-gradient(to right, #96b577, #469a89);
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
