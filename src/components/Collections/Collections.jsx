import banner from "assets/banner/image-banner.svg";
import shop from "assets/banner/shop.svg";
import left from "assets/banner/left.svg";
import right from "assets/banner/right.svg";
import { Button } from "components/Button";
const { styled } = require("styled-components");

const StyledCol = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 847px;
  padding: 0 10%;
  background: #f0f0f0;
  .banner {
    width: 442px;
    height: 562px;
  }
  .left {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .title {
    font-style: normal;
    font-weight: 300;
    font-size: 74px;
    color: #000;
  }
  .des {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #000;
  }
  Button:hover {
    transition: 0.3s;
    background-color: #ff6f61;
  }
  .tl {
    position: absolute;
    left: 0;
    top: 80%;
    transform: translate(0, -80%);
  }
  .tr {
    position: absolute;
    right: 0;
    top: 35%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 565px;
    .banner {
      width: 221px;
      height: 281px;
    }
  }
  @media (max-width: 767px) {
    height: 500px;
    .banner {
      display: none;
    }
    .title {
      font-size: 50px;
      margin: 0;
    }
    .des {
      font-size: 25px;
    }
  }
`;

export const Collections = () => {
  return (
    <StyledCol>
      <img className="tl" src={left} alt="tree in left" />
      <img className="tr" src={right} alt="tree in right" />
      <div className="left">
        <p className="title">Collections</p>
        <p className="des">
          You can explore ans shop many differnt collection from various barands
          here
        </p>
        <Button
          textColor={"#fff"}
          width={"223px"}
          height={"72px"}
          fontSize={29}
          bgColor={"#1E2832"}
        >
          <img src={shop} alt="shop icon" /> Shop Now
        </Button>
      </div>
      <img className="banner" src={banner} alt="banner" />
    </StyledCol>
  );
};
