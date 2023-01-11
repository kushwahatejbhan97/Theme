import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CategoryMainPage from './pages/CategoryMainPage';
import Home from './pages/Home';
import MainFooter from './components/layout/MainFooter';
import MainHeader from './components/layout/MainHeader';
import {getSuperCategory} from './redux/supercategory/SuperCategorySlice';
import {getCategory} from './redux/category/CategorySlice';
import {getCategoryTag} from './redux/tags/categorytag/CategoryTagSlice';
import {getUniversalTag} from './redux/tags/universaltag/UniversalTagSlice';
import {getPinDetails} from './redux/pincode/PinSlice';
import {getproduct} from './redux/product/ProductSlice';
import {getZone} from './redux/zone/ZoneSlice';
import {getbranddetails} from './redux/brand/BrandSlice';
import {getorder} from './redux/order/OrderSlice';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Logins from './pages/Logins';
import DashBoardMain from './pages/DashBoardMain';
import EditProfile from './pages/dashboard/EditProfile';
import RemovePage from './pages/dashboard/RemovePage';




function App() {
  const { isLoading} = useSelector((store) => store.superCategory);
  
  const dispatch = useDispatch();
  
  if(isLoading)
  {
    dispatch(getSuperCategory());
  }
  
  dispatch(getCategory());
  dispatch(getCategoryTag());
  dispatch(getUniversalTag());
  dispatch(getPinDetails());
  dispatch(getproduct());
  dispatch(getZone());
  dispatch(getbranddetails());
  dispatch(getorder());

 
  return (
    <>
    <BrowserRouter>
    <MainHeader />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/category/:caturl" index element={<CategoryMainPage />} />
        <Route path="/cart" index element={<Cart />} />
        <Route path="/wishlist" index element={<Wishlist />} />
        <Route path="/login" index element={<Logins />} />
        <Route path="/dashboard" index element={<DashBoardMain />} />
        <Route path="/editpage" index element={<EditProfile />} />
        <Route path="/removepage" index element={<RemovePage />} />

        
      </Routes>
      <MainFooter />
    </BrowserRouter>
    </>
  );
}

export default App;
