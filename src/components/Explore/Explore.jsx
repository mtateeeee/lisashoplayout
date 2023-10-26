import { styled } from "styled-components";
import brand1 from "assets/explore/brand-1.svg";
import brand2 from "assets/explore/brand-2.svg";
import brand3 from "assets/explore/brand-3.svg";
import brand4 from "assets/explore/brand-4.svg";
import brand5 from "assets/explore/brand-5.svg";
import itemx from "assets/explore/image-category-m.svg";
import item0 from "assets/explore/item-category-0.svg";
import item1 from "assets/explore/item-category-1.svg";
import item2 from "assets/explore/item-category-2.svg";
import item3 from "assets/explore/item-category-3.svg";
import { CardExplore } from "components/CardExplore";

const StyledExplore = styled.div`
  padding: 0 10%;
  background: #fff;
  .allbrand {
    padding: 90px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .allpic {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 50px;
    gap: 20px;
    position: relative;
  }
  .title {
    font-weight: 400;
    font-size: 34px;
    width: 648px;
    height: 450px;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(-90deg);
    padding: 90px 0;
    position: absolute;
    left: -5%;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 50%;
  }
  @media (min-width: 1600px) and (max-width: 1919px) {
    .title {
      left: -4%;
    }
    .allpic {
      justify-content: center;
      width: 1500px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1519px) {
    .title {
      left: -30px;
    }
    .allpic {
      justify-content: center;
    }
    .item {
      width: 700px;
      justify-content: center;
    }
    .allbrand {
      justify-content: center;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 5%;
    .title {
      display: none;
    }
    .item {
      width: 100%;
      justify-content: center;
    }
    .allbrand {
      justify-content: center;
    }
  }
  @media (max-width: 767px) {
    padding: 0;
    .title {
      display: none;
    }
    .allbrand {
      justify-content: center;
      padding: 10px;
    }
    .allbrand img {
      width: 100px;
      height: 35px;
    }
    .allpic {
      padding: 0;
    }
    .topmodel div img {
      width: 300px;
      padding: 0;
    }
    .item div img {
      width: 300px;
    }
    .item {
      display: flex;
      justify-content: center;
    }
  }
`;

const dataItem = [
  {
    image: item0,
    name: "pants",
    total: 200,
  },
  {
    image: item1,
    name: "coat",
    total: 520,
    tag: "Sale",
    bgColor: "#1E2832",
  },
  {
    image: item2,
    name: "shirt",
    total: 320,
  },
  {
    image: item3,
    name: "jacket",
    total: 103,
  },
];

export const Explore = () => {
  return (
    <StyledExplore>
      <div className="allbrand">
        <img src={brand1} alt="Graphic Studio" />
        <img src={brand2} alt="S.Salva" />
        <img src={brand3} alt="Golden Studio" />
        <img src={brand4} alt="Furniture Design" />
        <img src={brand5} alt="Travel Lookbook" />
      </div>
      <div className="allpic">
        <span className="title">Explore new and popular styles</span>
        <div className="topmodel">
          <CardExplore
            className="topmodel"
            image={itemx}
            name={"manto"}
            total={86}
          />
        </div>
        <div className="item">
          {dataItem.map((item) => (
            <CardExplore
              image={item.image}
              name={item.name}
              total={item.total}
              tag={item.tag}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </StyledExplore>
  );
};
