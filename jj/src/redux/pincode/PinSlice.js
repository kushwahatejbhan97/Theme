import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../config/baseUrl';

const initialState = {
    pinDetails : localStorage.getItem("pinDetails")
    ? JSON.parse(localStorage.getItem("pinDetails"))
    : [],
    isLoading : true,
}

export const getPinDetails = createAsyncThunk(
    'PinDetails/getPinDetails',
    async(thunkAPI) =>{  
        try {
            const url = `${Baseurl}/api/v1/pinamount/all`;
            const resp = await axios.get(url);
            return resp.data.pinamount;
        } catch (error) {
            return thunkAPI.rejectWithValue('PinDetails not Found')
        }
    })

    const PinSlice = createSlice({
        name : "PinAll",
        initialState,
        extraReducers:
        {
            [getPinDetails.pending] : (state) =>{
                state.isLoading = true;
            },
            [getPinDetails.fulfilled] : (state,action) =>{
                state.pinDetails = action.payload;
                localStorage.setItem("pinDetails", JSON.stringify(action.payload));
                state.isLoading = false;
            },
            [getPinDetails.rejected] : (state) =>{
                state.isLoading = true;
            }
        }
    })

    export default PinSlice.reducer