import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addNewProductGrp, getProductGrps, updateProductGrp, getProductGrpDetails } from "./thunk";

interface ProductGrpsStateType {
  productGrps: Array<any>;
  productGrpDetails: object;
  error?: string | object | null | undefined | unknown;
  success?: string | object | null | undefined | unknown;
}
export const productGrpsInitialState: ProductGrpsStateType = {
  productGrps: [],
  productGrpDetails: {},
  error: {},
  success:""
};


const productGrpsSlice = createSlice({
  name: "productGrps",
  initialState: productGrpsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProductGrps.fulfilled, (state: any, action: any) => {
      state.productGrps = action.payload.data;
    });
    builder.addCase(getProductGrps.rejected, (state: any, action: any) => {
      console.log("err == ", action.payload)
      state.error = action.payload || null;
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, please try again.")
    });

    builder.addCase(getProductGrpDetails.fulfilled, (state: any, action: any) => {
      state.productGrpDetails = action.payload.data;
    });
    builder.addCase(getProductGrpDetails.rejected, (state: any, action: any) => {
      console.log("err == ", action.payload)
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, while fetching product details.")
    });

    builder.addCase(addNewProductGrp.fulfilled, (state: any, action: any) => {
      state.productGrps.push(action.payload.data);
      toast.success("Product Group Added Successfully.")
      
    });
    builder.addCase(addNewProductGrp.rejected, (state: any, action: any) => {
      state.error = action.payload || null;
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, please try again.")
    });
    builder.addCase(updateProductGrp.fulfilled, (state: any, action: any) => {
      state.productGrps = (state.productGrps || []).map((event : any) =>
          event.id+'' === action.payload.data.id+''
          ? { ...event, ...action.payload.data }
          : event
      )
      toast.success("Product Group Updated Successfully.")
    });
    builder.addCase(updateProductGrp.rejected, (state: any, action: any) => {
      state.error = action.payload || null;
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, please try again.")
    });

    // builder.addCase(updateVendorStatus.fulfilled, (state: any, action: any) => {
    //   state.products = (state.products || []).map((event : any) =>
    //       event.id+'' === action.payload.data.id+''
    //       ? { ...event, ...action.payload.data }
    //       : event
    //   )
    //   const updatedStatus = action.payload.data.attributes.v_status?"Activated":"Deactivated"
    //   state.success=`Vendor ${updatedStatus} Successfully.`
    // });

    // builder.addCase(updateVendorStatus.rejected, (state: any, action: any) => {
    //   console.log("action==error=",action.payload)
    //   state.error = action.payload || null;
    // });


  },
});


export default productGrpsSlice.reducer;
