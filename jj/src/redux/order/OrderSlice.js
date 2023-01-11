import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../config/baseUrl';

const initialState ={
    order : localStorage.getItem("order")
    ? JSON.parse(localStorage.getItem("order"))
    : [], 
    isLoading : true,
}

export const getorder= createAsyncThunk('order/getorder', async(thunkAPI)=>{
    try{
        const clientid = thunkAPI.getState();
        console.log(clientid);
          //local storage thunk 
        const url= `${Baseurl}/api/v1/orders/all`;
        const resp = await axios(url);
        return resp.data.order;
        
    }
    catch(error)
    {
        return thunkAPI.rejectWithValue('404 Not Found');
    }
})
const OrderSlice = createSlice ({
    name:"orderList",
    initialState,
    extraReducers:{
        [getorder.pending]: (state) =>{
            state.isLoading = true;
        },
        [getorder.fulfilled]: (state, action) =>{
            state.isLoading = false;
            state.order = action.payload;
            localStorage.setItem("order", JSON.stringify(action.payload));
            
        },
        [getorder.rejected]: (state, action) =>{
            state.isLoading = true;
        },
    },
  
});

export default OrderSlice.reducer;