import { createSlice } from "@reduxjs/toolkit";
import {
  getLeadConversion,
  // updateCustomerStatus,
  // addNewCustomer,
  // updateCustomer,
  // getActiveCustomers
} from "./thunk";
import {  toast } from 'react-toastify';
  

interface CustomersStateType {
  customerList: Array<any>;
  leadConversionList:Array<any>;
  activeEstimates:Array<any>;
}
export const initialState: CustomersStateType = {
  customerList: [],
  leadConversionList: [],
  activeEstimates: []
};


const leadConversionSlice = createSlice({
  name: "l_conversion",
  initialState,
  reducers: {
    addNewLeadConversion(state, action) {
      state.leadConversionList = action.payload.data;
    },
    getLeadConversionSuccess(state,action){
      state.leadConversionList = action.payload.data;
    },
    getActiveEstimatesSuccess(state, action){
      state.activeEstimates = action.payload.data;
    }
   
  }
});

export const {
  addNewLeadConversion,
  getLeadConversionSuccess,
  getActiveEstimatesSuccess
} = leadConversionSlice.actions



// const leadConversionSlice = createSlice({
//   name: "l_conversion",
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(getLeadConversion.fulfilled, (state: any, action: any) => {
//       state.leadConversionList = action.payload.data;
//     });
//     builder.addCase(getLeadConversion.rejected, (state:any, action:any) => {
//       toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
//     });
//   },
// });

export default leadConversionSlice.reducer;