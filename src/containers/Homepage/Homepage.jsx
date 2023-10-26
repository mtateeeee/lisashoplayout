import BannerAds from "components/BannerAds";
import BestSell from "components/BestSell";
import Collections from "components/Collections";
import Explore from "components/Explore";
import Follow from "components/Follow";
import Subto from "components/Subto";
import { Helmet } from "react-helmet";

const { StoreLayout } = require("components/Layout");

const Homepage = () => {
  return (
    <StoreLayout>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Collections />
      <Explore />
      <Subto />
      <BannerAds />
      <BestSell />
      <Follow />
    </StoreLayout>
  );
};

export default Homepage;
