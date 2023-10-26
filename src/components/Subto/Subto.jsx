import { Button } from "components/Button";
import { styled } from "styled-components";
import fil from "assets/sub/filter.svg";
import { CardSub } from "components/CardSub";
import sub0 from "assets/sub/sub0.svg";
import sub1 from "assets/sub/sub1.svg";
import sub2 from "assets/sub/sub2.svg";
import sub3 from "assets/sub/sub3.svg";
import sub4 from "assets/sub/sub4.svg";
import sub5 from "assets/sub/sub5.svg";
import sub6 from "assets/sub/sub6.svg";
import sub7 from "assets/sub/sub7.svg";

const StyledSub = styled.div`
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
      width: 300px;
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

export const Subto = () => {
  // Array of card data
  const cardData = [
    {
      name: "Adicolor Classics Joggers",
      bgImage: sub0,
      category: "Dress",
      price: 63.85,
    },
    {
      name: "Nike Sportswear Futura Luxe",
      bgImage: sub1,
      category: "Bag",
      price: 130,
    },
    {
      name: "Geometric print Scarf",
      bgImage: sub2,
      category: "Scarf",
      price: 53,
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
      name: "Basic Dress Green",
      bgImage: sub4,
      category: "Dress",
      price: 236,
      tag: "Hot",
      bgColor: "#FF6F61",
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
      name: "Nike Sportswear Futura Luxe",
      bgImage: sub7,
      category: "Glasses",
      price: 160,
    },
  ];

  return (
    <StyledSub>
      <p className="title">Or subscribe to the newsletter</p>
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
          <img src={fil} alt="filter icon" /> Filter
        </Button>
      </div>
      <div className="card">
        {/* Map over the card data array */}
        {cardData.map((card, index) => (
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
      </div>
    </StyledSub>
  );
};
