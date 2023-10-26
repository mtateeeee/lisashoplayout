import { Button } from "components/Button";
import { CardSub } from "components/CardSub";
import { styled } from "styled-components";
import sub1 from "assets/sub/sub1.svg";
import sub2 from "assets/sub/sub2.svg";
import sub3 from "assets/sub/sub3.svg";
import sub4 from "assets/sub/sub4.svg";
import sub5 from "assets/sub/sub5.svg";
import sub6 from "assets/sub/sub6.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { min: 2500 },
    items: 5,
  },
  largeDesktop: {
    breakpoint: { max: 2500, min: 1650 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1650, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const cardSubData = [
  {
    name: "Basic Dress Green",
    bgImage: sub4,
    category: "Dress",
    price: 236,
    tag: "Hot",
    bgColor: "#FF6F61",
  },
  {
    name: "Nike Sportswear Futura Luxe",
    bgImage: sub1,
    category: "Bag",
    price: 130,
  },
  {
    name: "Yellow Reserved Hoodie",
    bgImage: sub3,
    category: "Dress",
    oldprice: 364,
    newprice: 155,
    tag: "Sale",
    bgColor: "#1E2832",
  },
  {
    name: "Nike Air Zoom Pegasus",
    bgImage: sub5,
    category: "Shoe",
    oldprice: 220,
    newprice: 198,
    tag: "Sale",
    bgColor: "#1E2832",
  },
  {
    name: "Nike Repel Miler",
    bgImage: sub6,
    category: "Dress",
    price: 120.5,
  },
  {
    name: "Geometric print Scarf",
    bgImage: sub2,
    category: "Scarf",
    price: 53,
  },
];

const StyledBest = styled.div`
  padding: 0 10%;
  .title {
    font-weight: 500;
    font-size: 50px;
    text-align: center;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
  .sub-title {
    display: flex;
    gap: 40px;
  }
  .m-title {
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .m-title:hover {
    transition: 0.3s;
    color: #ff6f61;
  }
  .active {
    color: #000;
  }
  Button:hover {
    transition: 0.3s;
    background-color: #ff6f61;
  }
  .card {
    width: 100%;
  }
  .carousel-item {
    width: 300px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 5%;
  }
  @media (max-width: 767px) {
    .sub-title {
      gap: 10px;
    }
    .title {
      font-size: 25px;
    }
    .m-title {
      font-size: 13px;
    }
    .card {
      width: 320px;
    }
    .pic img {
      width: 100%;
    }
    Button {
      width: 50px;
      height: 50px;
      margin-bottom: 20px;
    }
    Button p {
      display: none;
    }
  }
`;

export const BestSell = () => {
  return (
    <StyledBest>
      <p className="title">Best Sellers</p>
      <div className="head">
        <div className="sub-title">
          <p className="m-title active">All Products</p>
          <p className="m-title">T-Shirt</p>
          <p className="m-title">Hoodies</p>
          <p className="m-title">Jacket</p>
        </div>
        <Button
          textColor={"#fff"}
          bgColor={"#1E2832"}
          width={"92px"}
          height={"32px"}
        >
          Show All
        </Button>
      </div>
      <div className="card">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {cardSubData.map((card, index) => (
            <CardSub
              key={index}
              name={card.name}
              bgImage={card.bgImage}
              category={card.category}
              price={card.price}
              oldprice={card.oldprice}
              newprice={card.newprice}
              tag={card.tag}
              bgColor={card.bgColor}
            />
          ))}
        </Carousel>
      </div>
    </StyledBest>
  );
};
