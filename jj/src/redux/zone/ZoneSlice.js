import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../config/baseUrl';

const initialState ={
    zoneAll : localStorage.getItem("zoneAll")
    ? JSON.parse(localStorage.getItem("zoneAll"))
    : [],
    zoneLoading: false,
    isLoading: localStorage.getItem("zoneAll") ? false : true,
}


export const getZone = createAsyncThunk(
    'Zone/getZone',
     async(thunkAPI) =>{
        try{
            const url= `${Baseurl}/api/v1/zone/all`;
            const resp = await axios.get(url);
            return resp.data.zone
        }
        catch(error){
            return thunkAPI.rejectWithValue('zone Not Found');
        }
     });    

     const ZoneSlice = createSlice({
        name:"zone",
        initialState,
        extraReducers:
        {
            [getZone.pending]: (state) =>{
                state.isLoading = true;
            },
            [getZone.fulfilled]: (state, action) =>{
                
                state.zoneAll =action.payload;
                localStorage.setItem("zoneAll", JSON.stringify(action.payload));
                state.isLoading = false;
                
            },
            [getZone.rejected]: (state) =>{
                state.isLoading = true;
            },
    
        }
    });
    export default ZoneSlice.reducer;
    