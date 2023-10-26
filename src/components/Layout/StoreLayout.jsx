import { Footer } from "components/Footer";
import { Header } from "components/Header";

const StoreLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default StoreLayout;
