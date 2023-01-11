import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../config/baseUrl';

const initialState ={
    superCat : localStorage.getItem("superCat")
    ? JSON.parse(localStorage.getItem("superCat"))
    : [],
    drugsSuperCat:localStorage.getItem("superCat")
    ? JSON.parse(localStorage.getItem("superCat")).find((superCate)=>superCate.name==="Drugs")
    : [],
    deviceSuperCat:localStorage.getItem("superCat")
    ? JSON.parse(localStorage.getItem("superCat")).find((superCate)=>superCate.name==="Devices")
    : [],
    productSuperCat:localStorage.getItem("superCat")
    ? JSON.parse(localStorage.getItem("superCat")).find((superCate)=>superCate.name==="Products")
    : [],
    SuperCatLoading: false,
    isLoading: localStorage.getItem("superCat") ? false : true,
}

export const getSuperCategory = createAsyncThunk(
    'SuperCategory/getSuperCategory',
     async(thunkAPI) =>{
        try{
            const url= `${Baseurl}/api/v1/supercategory/all`;
            const resp = await axios.get(url);
            return resp.data.supercategory
        }
        catch(error){
            return thunkAPI.rejectWithValue('SuperCategory Not Found');
        }
     });    

const SuperCategorySlice = createSlice({
    name:"superCategory",
    initialState,
    extraReducers:
    {
        [getSuperCategory.pending]: (state) =>{
            state.isLoading = true;
        },
        [getSuperCategory.fulfilled]: (state, action) =>{
            
            state.superCat =action.payload;
            localStorage.setItem("superCat", JSON.stringify(action.payload));
            state.isLoading = false;
            
        },
        [getSuperCategory.rejected]: (state) =>{
            state.isLoading = true;
        },

    }
});
export default SuperCategorySlice.reducer;


