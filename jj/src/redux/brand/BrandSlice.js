import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../config/baseUrl';

const initialState = {
    brand: localStorage.getItem("brand")
    ? JSON.parse(localStorage.getItem("brand"))
    : [],  
    drugsBrand: [],
    deviceBrand:[],
    productBrand:[],
    isLoading : true,

};

export const getbranddetails = createAsyncThunk('brand/getbrands', async (thunkAPI) =>{
    try{
        const url= `${Baseurl}/api/v1/brand/all`;
        const resp = await axios(url);
        return resp.data.brand;
        
    }
    catch(error){
        return thunkAPI.rejectWithValue('404 Not Found');
    }
});

const BrandSlice = createSlice ({
    name: "brandIteams",
    initialState,
    extraReducers: {
        [getbranddetails.pending]: (state) =>{
            state.isLoading = true;
        },
        [getbranddetails.fulfilled]: (state, action) =>{
            state.isLoading = false;
            state.brand = action.payload;
            localStorage.setItem("brand", JSON.stringify(action.payload));
        },
        [getbranddetails.rejected]: (state) =>{
            state.isLoading = true;
        },
    },
});


export default BrandSlice.reducer;