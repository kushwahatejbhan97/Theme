import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../config/baseUrl';


const initialState = {
    categorytotal : localStorage.getItem("categorytotal")
    ? JSON.parse(localStorage.getItem("categorytotal"))
    : [],
    drugsCategory:  localStorage.getItem("categorytotal")
    ? JSON.parse(localStorage.getItem("categorytotal")).filter((category) =>category.supercategoryid==="633a937fa389f1670a07b7cd").splice(0,6)
    : [],
    deviceCategory: localStorage.getItem("categorytotal")
    ? JSON.parse(localStorage.getItem("categorytotal")).filter((category) =>category.supercategoryid==="633a8ceba389f1670a0756fa").splice(0,5)
    : [],
    productCategory:  localStorage.getItem("categorytotal")
    ? JSON.parse(localStorage.getItem("categorytotal")).filter((category) =>category.supercategoryid==="633a8cdba389f1670a07560a").splice(0,10)
    : [],
    CategoryLoading: false,
    isLoading: localStorage.getItem("categorytotal") ? false : true,
}


export const getCategory = createAsyncThunk(
    'Category/getCategory',
    async(thunkAPI) =>{
        try {
            const url = `${Baseurl}/api/v1/category/all`;
            const resp = await axios.get(url);
            return resp.data.category;
        } catch (error) {
            return thunkAPI.rejectWithValue('Category not Found')
        }
    })

    const CategorySlice = createSlice({
        name : "categoryAll",
        initialState,
        extraReducers:
        {
            [getCategory.pending] : (state) =>{
                state.isLoading = true;
            },
            [getCategory.fulfilled] : (state,action) =>{
                state.categorytotal = action.payload;
                localStorage.setItem("categorytotal", JSON.stringify(action.payload));
                state.drugsCategory = state.categorytotal.filter((category) =>category.supercategoryid==="633a937fa389f1670a07b7cd").splice(0,6);

                state.deviceCategory = state.categorytotal.filter((category) =>category.supercategoryid==="633a8ceba389f1670a0756fa").splice(0,5);

                state.productCategory = state.categorytotal.filter((category) =>category.supercategoryid==="633a8cdba389f1670a07560a").splice(0,10);

                state.isLoading = false;
            },
            [getCategory.rejected] : (state) =>{
                state.isLoading = true;
            }
        }
    })

export default CategorySlice.reducer;

    