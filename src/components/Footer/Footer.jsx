import { styled } from "styled-components";
import fb from "assets/footer/fb.svg";
import twitter from "assets/footer/twitter.svg";
import linkedin from "assets/footer/linkedin.svg";
import insta from "assets/footer/insta.svg";
import payment from "assets/footer/icons_payment.svg";
import top from "assets/footer/top.svg";

const StyledFooter = styled.div`
  height: 355px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    margin: 240px 10% 0 10%;
    display: flex;
    justify-content: space-between;
  }
  .bottom {
    padding: 0 10%;
    background: #1e2832;
  }
  .col {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .logo {
    font-size: 28px;
    color: #000;
  }
  .des {
    font-size: 16px;
    color: rgba(30, 40, 50, 0.75);
  }
  .social {
    display: flex;
    width: 50%;
    justify-content: space-between;
  }
  .title {
    font-size: 16px;
    color: #000;
    text-transform: uppercase;
    font-weight: 600;
  }
  .child-title p {
    font-size: 14px;
    color: #1e2832;
    transition: 0.3s;
    cursor: pointer;
  }
  .child-title p:hover {
    color: #ff6f61;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 90px 0;
  }
  .inc {
    font-size: 16px;
    color: #fff;
  }
  .pay {
    gap: 10px;
  }
  .totop {
    width: 150px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s;
    cursor: pointer;
  }
  .totop:hover {
    background: #ff6f61;
  }

  @media (min-width: 1024px) and (max-width: 1919px) {
    .top {
      margin: 120px 5% 0 5%;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .top {
      margin: 60px 5% 0 5%;
    }
  }
  @media (max-width: 767px) {
    height: 284px;
    .top {
      margin: 30px 5% 0 5%;
    }
    .pay {
      display: none;
    }
    .col {
      justify-content: space-around;
    }
    .logo {
      font-size: 16px;
    }
    .des,
    .title {
      font-size: 8px;
    }
    .social {
      width: 100%;
      width: 15px;
      height: 15px;
    }
    .child-title p {
      font-size: 7px;
    }
    .bottom {
      margin: 0;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="top">
        <div className="col">
          <p className="logo">Lisa</p>
          <p className="des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="social">
            <img src={fb} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={insta} alt="instagram" />
          </div>
        </div>
        <div className="col">
          <p className="title">Catalog</p>
          <div className="child-title">
            <p>Necklaces</p>
            <p>Hoodies</p>
            <p>Jewelry Box</p>
            <p>T-Shirt</p>
            <p>Jacket</p>
          </div>
        </div>
        <div className="col">
          <p className="title">About Us</p>
          <div className="child-title">
            <p>Our Producers</p>
            <p>Sitemap</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="col">
          <p className="title">Customer Services</p>
          <div className="child-title">
            <p>Contact Us</p>
            <p>Track Your Order</p>
            <p>Product Care & Repair</p>
            <p>Book an Appointment</p>
            <p>Shipping & Returns</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p className="inc">© 2023 LISA , Inc.</p>
        <img className="pay" src={payment} alt="payment" />
        <div
          className="totop"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <p>Scroll To Top</p>
          <img src={top} alt="top" />
        </div>
      </div>
    </StyledFooter>
  );
};
