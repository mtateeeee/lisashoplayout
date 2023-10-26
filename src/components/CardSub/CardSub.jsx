import { styled } from "styled-components";
import { ReactComponent as Heart } from "assets/sub/heart.svg";
import { ReactComponent as Search } from "assets/sub/search.svg";
import { ReactComponent as Shop } from "assets/sub/shop.svg";

const StyledCard = styled.div`
  width: 312px;
  display: block;
  overflow: auto;
  .name {
    font-weight: 600;
    font-size: 16px;
    color: #000;
    margin: 18px 10px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }
  .category {
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
  .price {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #000;
  }
  .oldprice {
    font-weight: 600;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration-line: line-through;
  }
  .newprice {
    font-weight: 600;
    font-size: 16px;
    color: #ff6f61;
  }
  .pic {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 400px;
    position: relative;
  }
  .pic:hover {
    .shopnow {
      visibility: visible;
      opacity: 1;
    }
  }
  .tag {
    width: 52px;
    height: 24px;
    position: absolute;
    top: 10%;
    left: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .discount {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .shopnow {
    position: absolute;
    width: 100%;
    height: 55px;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #1e2832;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }
  .action-img {
    width: 25px;
    height: 25px;
    padding-right: 10px;
    filter: invert(100%) sepia(0%) saturate(22%) hue-rotate(343deg)
      brightness(106%) contrast(106%);
  }
  .tag {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
  .shop-action2 {
    display: flex;
    align-items: center;
    span {
      color: #fff;
      font-weight: 400;
      font-size: 18px;
    }
  }
  .shop-action2:hover {
    cursor: pointer;
    span {
      color: #ff6f61;
    }
    svg {
      filter: invert(52%) sepia(29%) saturate(1083%) hue-rotate(316deg)
        brightness(101%) contrast(101%);
    }
  }
`;

export const CardSub = ({
  bgColor,
  bgImage,
  name,
  category,
  price,
  oldprice,
  newprice,
  tag,
  ...rest
}) => {
  return (
    <StyledCard {...rest}>
      <div className="pic" bgColor={bgColor}>
        <img src={bgImage} alt="item" />
        <div className="tag" style={{ background: `${bgColor}` }}>
          {tag}
        </div>
        <div className="shopnow">
          <div className="shop-action1">
            <Heart className="action-img" />
            <Search className="action-img" />
          </div>
          <div className="shop-action2">
            <Shop className="action-img" />
            <span>Shop Now</span>
          </div>
        </div>
      </div>
      <p className="name">{name}</p>
      <div className="bottom">
        <p className="category">{category}</p>
        {price ? (
          <p className="price">${price}</p>
        ) : (
          <div className="discount">
            <p className="oldprice">${oldprice}</p>
            <p className="newprice">${newprice}</p>
          </div>
        )}
      </div>
    </StyledCard>
  );
};
