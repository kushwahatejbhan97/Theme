import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../../config/baseUrl';



const initialState = {
    universaltagtotal : localStorage.getItem("universaltagtotal")
    ? JSON.parse(localStorage.getItem("universaltagtotal"))
    : [],
    UniversalTagLoading: false,
    isLoading: localStorage.getItem("universaltagtotal") ? false : true,
}


export const getUniversalTag = createAsyncThunk(
    'UniversalTag/getUniversalTag',
    async(thunkAPI) =>{
        try {
            const url = `${Baseurl}/api/v1/universaltag/all`;
            const resp = await axios.get(url);
            return resp.data.universaltag;
        } catch (error) {
            return thunkAPI.rejectWithValue('universaltag not Found')
        }
    })

    const UniversalTagSlice = createSlice({
        name : "UniversaltagAll",
        initialState,
        extraReducers:
        {
            [getUniversalTag.pending] : (state) =>{
                state.isLoading = true;
            },
            [getUniversalTag.fulfilled] : (state,action) =>{
                state.universaltagtotal = action.payload;
                localStorage.setItem("universaltagtotal", JSON.stringify(action.payload));
                state.isLoading = false;
            },
            [getUniversalTag.rejected] : (state) =>{
                state.isLoading = true;
            }
        }
    })

export default UniversalTagSlice.reducer;

    