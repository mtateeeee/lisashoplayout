import find from "assets/header/search.svg";
import { ReactComponent as Shop } from "assets/header/shop.svg";
import { ReactComponent as Acc } from "assets/header/acc.svg";
import { styled } from "styled-components";

const HeaderStyled = styled.div`
  background: #f0f0f0;
  padding: 22px 10%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search-bar {
    padding: 0px;
    width: 50px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
  .input-search {
    height: 50px;
    width: 0px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    background-color: #f0f0f0;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    padding-right: 40px;
    color: #0f0f0f;
  }
  .input-search::placeholder {
    color: rgba(7, 7, 7, 0.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  .btn-search {
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    color: #141414;
    background-color: transparent;
    pointer-events: painted;
  }
  .icon-size {
    padding-top: 18px;
    width: 40px;
    height: 40px;
  }
  .btn-search:focus ~ .input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    padding-left: 50px;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .input-search:focus {
    width: 300px;
    padding-left: 50px;
    border-radius: 0px;
    background-color: transparent;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .brand {
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    color: #000;
    font-family: "AmstelvarAlpha";
  }
  .accs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
  .icon {
    width: 25px;
    height: 25px;
  }
  .shop,
  .acc {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  .label {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #1e2832;
  }
  .line {
    bottom: 0;
    margin-top: 10px;
    border: 1px solid #e3e3e3;
  }
  .shop:hover,
  .acc:hover {
    span {
      color: #ff6f61;
    }
    svg {
      filter: invert(52%) sepia(29%) saturate(1083%) hue-rotate(316deg)
        brightness(101%) contrast(101%);
    }
  }

  @media (min-width: 1024px) and (max-width: 1919px) {
    .btn-search:focus ~ .input-search {
      width: 150px;
    }
    .input-search:focus {
      width: 150px;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .content {
      flex-wrap: wrap;
    }
    .search-bar {
      width: 100%;
      order: 1;
    }
    .brand,
    .accs {
      order: 0;
    }
    .btn-search:focus ~ .input-search {
      width: 100%;
    }
    .input-search:focus {
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    padding: 11px 10%;
    .content {
      height: 90px;
      flex-wrap: wrap;
    }
    .line {
      margin-top: 35px;
    }
    .icon-size {
      width: 30px;
      height: 30px;
    }
    .search-bar {
      width: 80%;
      order: 1;
    }
    .brand,
    .accs {
      order: 0;
    }
    .shop span, .acc span {
      display: none;
    }
    .btn-search:focus ~ .input-search {
      width: 100%;
    }
    .input-search:focus {
      width: 100%;
    }
  }
`;
export const Header = () => {
  return (
    <HeaderStyled>
      <div className="content">
        <div className="search-bar">
          <div className="search-box">
            <button className="btn-search">
              <img className="icon-size" src={find} alt="icon-search" />
            </button>
            <input
              type="text"
              class="input-search"
              placeholder="Type to Search..."
            />
          </div>
        </div>
        <span className="brand">Lisa Store</span>
        <div className="accs">
          <div className="shop">
            <Shop />
            <span className="label">Account</span>
          </div>
          <div className="acc">
            <Acc />
            <span className="label">Shopping</span>
          </div>
        </div>
      </div>
      <div className="line" />
    </HeaderStyled>
  );
};
