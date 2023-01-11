import { configureStore } from "@reduxjs/toolkit";
import superCategoryReducer from './redux/supercategory/SuperCategorySlice';
import CategoryReducer from './redux/category/CategorySlice';
import CategorytagReducer from './redux/tags/categorytag/CategoryTagSlice';
import UniversaltagReducer from './redux/tags/universaltag/UniversalTagSlice';
import PinReducer from './redux/pincode/PinSlice';
import productReducer from './redux/product/ProductSlice';
import zoneReducer from './redux/zone/ZoneSlice';
import authSlice from './redux/authentication/AuthSlice';
import brandIteamsReducer from './redux/brand/BrandSlice';
import orderListReducer from './redux/order/OrderSlice';
import optReducer from './redux/otplogin/OtpLoginSlice';




export const store = configureStore({
    reducer : {
        superCategory : superCategoryReducer,
        categoryAll : CategoryReducer,
        CategorytagAll : CategorytagReducer,
        UniversaltagAll : UniversaltagReducer,
        PinAll : PinReducer,
        product : productReducer,
        zone : zoneReducer,
        auth : authSlice.reducer,
        brandIteams : brandIteamsReducer,
        orderList : orderListReducer,
        optlogin : optReducer,
    }
})