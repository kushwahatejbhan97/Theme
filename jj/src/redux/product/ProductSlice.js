import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../config/baseUrl';

const initialState = {
    productAll: [],
    producttotal: localStorage.getItem("productstotal")
    ? JSON.parse(localStorage.getItem("productstotal"))
    : [],
    
    trendingProducts:localStorage.getItem("trendingProducts")
    ? JSON.parse(localStorage.getItem("trendingProducts"))
    : [],  
    searchProduct:[],
    isLoading : true,
    isTrendingLoading:localStorage.getItem("trendingProducts")
    ? false
    : true,  
    isSearchLoading : true,
    productLoading : true,
   
};

export const getproduct = createAsyncThunk('product/getproduct', async (thunkAPI) =>{
    try{
 
        const url= `${Baseurl}/api/v1/productprice/zone/633a7f799927804a6e76b4f6`;
        const resp = await axios(url);
        

        return resp.data.productprice;
    }
    catch(error){
        return thunkAPI.rejectWithValue('404 Not Found');
    }
});

const ProductSlice = createSlice ({
    name: "product",
    initialState,
    reducers:{
        searchproduct(state, action){
            state.isLoading= true;
            state.searchProduct = action.payload;
            state.isLoading= false;
        },
        getproductbyCatSlugUrl(state, action){
            return state.producttotal.filter((product)=>product.productId.categoryid===action.payload)
        },
        getproductbySearch(state, action){
                state.isLoading= true;
                state.searchProduct = state.producttotal.filter((product)=>product.name.toLowerCase().match(action.payload.toLowerCase()));
                state.isLoading= false;
        }
    },
    extraReducers: {
        [getproduct.pending]: (state) =>{
            state.isLoading = true;
        },
        [getproduct.fulfilled]: (state, action) =>{
            
            
         state.productAll = action.payload;
           

                state.producttotal = state.productAll.filter((product)=> product.productId!==null);
                state.producttotal = state.producttotal.filter((product)=> product.productId.hasOwnProperty('thumbnail') );
                // console.log(state.producttotal)
                try{
                   
                    state.trendingProducts = state.producttotal.filter((product)=>product.trending === true).splice(0,12);
                    
                    localStorage.setItem("trendingProducts", JSON.stringify(state.trendingProducts));
                   
                }
                catch(error){}
                
                state.isLoading = false;
                state.productLoading = !state.productLoading;
                state.isTrendingLoading = false;
        
            

        },
        [getproduct.rejected]: (state, action) =>{
            state.isLoading = true;
        },
    },
});

export const {getproductbyCatSlugUrl, getproductbySearch,searchproduct} = ProductSlice.actions;
export default ProductSlice.reducer;