import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Baseurl} from '../../config/baseUrl';

const initialState = {
   mob:"",
   otp:"",
   pageStatus:0,
};

export const getClientByMob = createAsyncThunk('mobileclient/getClientByMob', async (mobile, thunkAPI) =>{
    try{
        const url= `${Baseurl}/api/v1/client/isClient/${mobile}`;
        const resp = await axios(url);
        return resp.data;
    }
    catch(error){
        return thunkAPI.rejectWithValue('Pincode Not Found');
    }
});

const OtpSlice = createSlice ({
    name: "optlogin",
    initialState,
    reducers:{
        LoginOtp(state, action){
                state.mob= action.payload;
                var digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 6; i++ ) {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                state.otp = OTP;
                state.pageStatus = 1;
        },
        pageStatusChange(state, action){

            state.pageStatus = action.payload;
        }

    },

});

export const { LoginOtp,pageStatusChange } = OtpSlice.actions;
export default OtpSlice.reducer;