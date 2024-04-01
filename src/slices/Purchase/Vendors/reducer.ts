import { createSlice } from "@reduxjs/toolkit";
import {
  getVendors,
  addNewVendor,
  updateVender,
  updateVendorStatus,
  getActiveVendors
} from "./thunk";
import {  toast } from 'react-toastify';
  

interface VendorsStateType {
  vendorList: Array<any>;
  vendorDetail: object;
  activeVendorList:Array<any>
}
export const initialState: VendorsStateType = {
  vendorList: [],
  vendorDetail: {},
  activeVendorList:[]
};

const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVendors.fulfilled, (state: any, action: any) => {
      state.vendorList = action.payload.data;
    });
    builder.addCase(getVendors.rejected, (state:any, action:any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
    builder.addCase(addNewVendor.fulfilled, (state: any, action: any) => {
      state.vendorList.push(action.payload.data);
      toast.success("New vendor added successfully.");
    });
    builder.addCase(addNewVendor.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
    builder.addCase(updateVender.fulfilled, (state: any, action: any) => {
      state.vendorList = (state.vendorList || []).map((event : any) =>
          event.id+'' === action.payload.data.id+''
          ? { ...event, ...action.payload.data }
          : event
      );
      toast.success("Vendor detail updated successfully.")
    });
    builder.addCase(updateVender.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });

    builder.addCase(updateVendorStatus.fulfilled, (state: any, action: any) => {
      state.vendorList = (state.vendorList || []).map((event : any) =>
          event.id+'' === action.payload.data.id+''
          ? { ...event, ...action.payload.data }
          : event
      )
      const updatedStatus = action.payload.data.attributes.v_status?"activated":"deactivated"
      toast.success(`Vendor ${updatedStatus} successfully.`)
   
    });

    builder.addCase(updateVendorStatus.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });

    builder.addCase(getActiveVendors.fulfilled, (state: any, action: any) => {
      state.activeVendorList = action.payload.data;
    });
  },
});

export default vendorsSlice.reducer;