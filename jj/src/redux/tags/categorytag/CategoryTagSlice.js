import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../../config/baseUrl';



const initialState = {
    categorytagtotal : localStorage.getItem("categorytagtotal")
    ? JSON.parse(localStorage.getItem("categorytagtotal"))
    : [],
    CategoryTagLoading: false,
    isLoading: localStorage.getItem("categorytagtotal") ? false : true,
}


export const getCategoryTag = createAsyncThunk(
    'CategoryTag/getCategoryTag',
    async(thunkAPI) =>{
        try {
            const url = `${Baseurl}/api/v1/categorytag/all`;
            const resp = await axios.get(url);
            return resp.data.categorytag;
        } catch (error) {
            return thunkAPI.rejectWithValue('categorytag not Found')
        }
    })

    const CategoryTagSlice = createSlice({
        name : "CategorytagAll",
        initialState,
        extraReducers:
        {
            [getCategoryTag.pending] : (state) =>{
                state.isLoading = true;
            },
            [getCategoryTag.fulfilled] : (state,action) =>{
                state.categorytagtotal = action.payload;
                localStorage.setItem("categorytagtotal", JSON.stringify(action.payload));
                state.isLoading = false;
            },
            [getCategoryTag.rejected] : (state) =>{
                state.isLoading = true;
            }
        }
    })

export default CategoryTagSlice.reducer;

    