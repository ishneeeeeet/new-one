import { createSlice } from "@reduxjs/toolkit";
import {
  addNewAdjustment,
  getProductAdjmtList,
  productAdjmtDetailsById
} from "./thunk";

import {  toast } from 'react-toastify';

interface AdjestmentStateType {
  productAdjmtList:Array<any>;
   productAdjmtDetail: object;
}
export const initialState: AdjestmentStateType = {
  productAdjmtDetail:{},
  productAdjmtList:[],
};

const inventoryAdjmtSlice = createSlice({
  name: "adjustment",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addNewAdjustment.fulfilled, (state: any, action: any) => {
      toast.success( "New product adjustment added successfully.")
      });
    builder.addCase(addNewAdjustment.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
    builder.addCase(getProductAdjmtList.fulfilled, (state: any, action: any) => {
      state.productAdjmtList = action.payload.data;
    });
    builder.addCase(getProductAdjmtList.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });

    builder.addCase(productAdjmtDetailsById.fulfilled, (state: any, action: any) => {
      state.productAdjmtDetail = action.payload.data;
    });
    builder.addCase(productAdjmtDetailsById.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
  },
});

export default inventoryAdjmtSlice.reducer;