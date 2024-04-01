import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addNewProduct, getCategories, getProducts, getUnits, addNewCategory, addNewUnit, updateProduct, getActiveProducts, getProductDetailsById } from "./thunk";

interface ProductsStateType {
  products: Array<any>;
  productDetails: object;
  error?: string | object | null | undefined | unknown;
  success?: string | object | null | undefined | unknown;
}
export const productsInitialState: ProductsStateType = {
  products: [],
  productDetails: {},
  error: {},
  success:""
};

interface UnitsStateType {
  units: Array<any>;
  error?: string | object | null | undefined | unknown;
  success?: string | object | null | undefined | unknown;
}
export const unitInitialState: UnitsStateType = {
  units: [],
  error: {},
  success:""
}

interface CategoriesStateType {
  categories: Array<any>;
  error?: string | object | null | undefined | unknown;
  success?: string | object | null | undefined | unknown;
}
export const categoryInitialState: CategoriesStateType = {
  categories: [],
  error: {},
  success:""
}


const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state: any, action: any) => {
      state.products = action.payload.data;
    });
    builder.addCase(getProducts.rejected, (state: any, action: any) => {
      console.log("err == ", action.payload)
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong., while fetching products.")
    });

    builder.addCase(getProductDetailsById.fulfilled, (state: any, action: any) => {
      state.productDetails = action.payload.data;
    });
    builder.addCase(getProductDetailsById.rejected, (state: any, action: any) => {
      console.log("err == ", action.payload)
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, while fetching product details.")
    });

    builder.addCase(getActiveProducts.fulfilled, (state: any, action: any) => {
      state.products = action.payload.data;
    });
    builder.addCase(getActiveProducts.rejected, (state: any, action: any) => {
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong., while fetching products.")
    });

    builder.addCase(addNewProduct.fulfilled, (state: any, action: any) => {
      state.products.push(action.payload.data);
      toast.success( "Product Added Successfully.")      
    });
    builder.addCase(addNewProduct.rejected, (state: any, action: any) => {
      state.error = action.payload || null;
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, please try again.")
    });
    builder.addCase(updateProduct.fulfilled, (state: any, action: any) => {
      state.products = (state.products || []).map((event : any) =>
          event.id+'' === action.payload.data.id+''
          ? { ...event, ...action.payload.data }
          : event
      )
      toast.success("Product Details Updated Successfully.")      
    });
    builder.addCase(updateProduct.rejected, (state: any, action: any) => {
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

    // builder.addCase(updateVendorStatus.rejected, (state, action) => {
    //   console.log("action==error=",action.payload)
    //   state.error = action.payload || null;
    // });


  },
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoryInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state: any, action: any) => {
      state.categories = action.payload.data;
    });
    builder.addCase(getCategories.rejected, (state: any, action: any) => {
      console.log("err == ", action.payload)
      state.error = action.payload || null;
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, please try again.")
    });
    builder.addCase(addNewCategory.fulfilled, (state: any, action: any) => {
      state.categories.push(action.payload.data);      
    });
    builder.addCase(addNewCategory.rejected, (state: any, action: any) => {
      state.error = action.payload || null;
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, please try again.")
    });
  },
});

const unitsSlice = createSlice({
  name: "units",
  initialState: unitInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUnits.fulfilled, (state: any, action: any) => {
      state.units = action.payload.data;
    });
    builder.addCase(getUnits.rejected, (state: any, action: any) => {
      console.log("err == ", action.payload)
      state.error = action.payload || null;
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, please try again.")
    });
    builder.addCase(addNewUnit.fulfilled, (state: any, action: any) => {
      state.units.push(action.payload.data);
      state.success="Unit Added Successfully."
      
    });
    builder.addCase(addNewUnit.rejected, (state: any, action: any) => {
      state.error = action.payload || null;
      toast.error(action.payload?.message ? action.payload?.message : "Something went wrong, please try again.")
    });
  },
});

export const productReducer = productsSlice.reducer;
export const categoryReducer = categoriesSlice.reducer;
export const unitsReducer = unitsSlice.reducer;
//       state.products = action.payload.data;
//     });
//     builder.addCase(getProducts.rejected, (state: any, action: any) => {
//       state.alerts.push({
//         message: action.payload?.message ? action.payload?.message : "Something Went Wrong.",
//         type: "error"
//       });
//     });
//   },
// });

// export default productSlice.reducer;
