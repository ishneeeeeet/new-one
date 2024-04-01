import { createSlice } from "@reduxjs/toolkit";
import {
  getActiveContractor
} from "./thunk";
import {  toast } from 'react-toastify';
  

interface ContractorStateType {
  contractorList: Array<any>;
}
export const initialState: ContractorStateType = {
  contractorList: []
};

const contractorsSlice = createSlice({
  name: "contractor",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getActiveContractor.fulfilled, (state: any, action: any) => {
      console.log("=contractorList=",action.payload.data)
      state.contractorList = action.payload.data;
    });
    builder.addCase(getActiveContractor.rejected, (state:any, action:any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
  
  },
});

export default contractorsSlice.reducer;