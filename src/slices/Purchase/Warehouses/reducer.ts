import { createSlice } from "@reduxjs/toolkit";
import {
  getWarehouses,
  addNewWarehouse,
  updateWarehouse,
  updateWarehouseStatus,
  getActiveWarehouse
} from "./thunk";
import {  toast } from 'react-toastify';

interface WarehouseStateType {
  warehouses: Array<any>;
  warehouseDetail: object;
  activeWarehouses: Array<any>;
}
export const initialState: WarehouseStateType = {
  warehouses: [],
  warehouseDetail: {},
  activeWarehouses:[]
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getActiveWarehouse.fulfilled, (state: any, action: any) => {
      state.activeWarehouses = action.payload.data;
    });
    builder.addCase(getWarehouses.fulfilled, (state: any, action: any) => {
      state.warehouses = action.payload.data;
    });
    builder.addCase(getWarehouses.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
    builder.addCase(addNewWarehouse.fulfilled, (state: any, action: any) => {
      state.warehouses.push(action.payload.data);
      toast.success("Warehouse added successfully.")
    });
    builder.addCase(addNewWarehouse.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
    builder.addCase(updateWarehouse.fulfilled, (state: any, action: any) => {
      state.warehouses = (state.warehouses || []).map((event : any) =>
          event.id+'' === action.payload.data.id+''
          ? { ...event, ...action.payload.data }
          : event
      );
      toast.success("Warehouse detail updated successfully.");
    });
    builder.addCase(updateWarehouse.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
    builder.addCase(updateWarehouseStatus.fulfilled, (state: any, action: any) => {
      state.warehouses = (state.warehouses || []).map((event : any) =>
          event.id+'' === action.payload.data.id+''
          ? { ...event, ...action.payload.data }
          : event
      )
      const updatedStatus = action.payload.data.attributes.w_status?"activated":"deactivated";
      toast.success(`Warehouse ${updatedStatus} successfully.`)
      
    });
    builder.addCase(updateWarehouseStatus.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
  },
});

export default warehouseSlice.reducer;