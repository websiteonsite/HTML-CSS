import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/Product/ProductContainer";
//import GridMUI from "./playground/GridMUI";
import DesktopCategories from "./components/Product/DesktopCategories";
import MobileCategories from "./components/Product/MobileCategories";

function App() {
  return (
    < >
      <Navbar/>
      <Header /> 
      <ProductContainer />
      {/* <GridMUI /> */}
      <DesktopCategories />
      <MobileCategories />
    </>
  );
}

export default App;
