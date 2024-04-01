import { createSlice } from "@reduxjs/toolkit";
import {
  getCustomers,
  updateCustomerStatus,
  addNewCustomer,
  updateCustomer,
  getActiveCustomers
} from "./thunk";
import {  toast } from 'react-toastify';
  

interface CustomersStateType {
  customerList: Array<any>;
  activeCustomerList:Array<any>
}
export const initialState: CustomersStateType = {
  customerList: [],
  activeCustomerList:[]
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCustomers.fulfilled, (state: any, action: any) => {
      state.customerList = action.payload.data;
    });
    builder.addCase(getCustomers.rejected, (state:any, action:any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
    builder.addCase(addNewCustomer.fulfilled, (state: any, action: any) => {
      state.customerList.push(action.payload.data);
      state.activeCustomerList.push(action.payload.data);
      toast.success("New customer added successfully.");
    });
    builder.addCase(addNewCustomer.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });
    builder.addCase(updateCustomer.fulfilled, (state: any, action: any) => {
      state.customerList = (state.customerList || []).map((event : any) =>
          event.id+'' === action.payload.data.id+''
          ? { ...event, ...action.payload.data }
          : event
      );
      toast.success("Customer detail updated successfully.")
    });
    builder.addCase(updateCustomer.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });

    builder.addCase(updateCustomerStatus.fulfilled, (state: any, action: any) => {
      state.customerList = (state.customerList || []).map((event : any) =>
          event.id+'' === action.payload.data.id+''
          ? { ...event, ...action.payload.data }
          : event
      )
      const updatedStatus = action.payload.data.attributes.c_status?"activated":"deactivated"
      toast.success(`Customer ${updatedStatus} successfully.`)
    });

    builder.addCase(updateCustomerStatus.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong.")
    });

    builder.addCase(getActiveCustomers.fulfilled, (state: any, action: any) => {
      state.activeCustomerList = action.payload.data;
    });

    builder.addCase(getActiveCustomers.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, while fetching customers.")
    });
  },
});

export default customersSlice.reducer;