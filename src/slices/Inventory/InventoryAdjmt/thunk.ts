import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatDecimals } from "src/slices/Layout/utils";

import {
  addNewAdjustment as addNewAdjustmentApi,
  getProductAdjmtList as getProductAdjmtListApi,
  productAdjmtDetailsById as productAdjmtDetailsByIdApi,
  updateProductStock as updateProductStockApi
} from "../../../helpers/backend_helper";
import { getProducts } from "../Products/thunk";

export const addNewAdjustment = createAsyncThunk(
  "adjustment/addNewAdjustment",
  async (event :any,thunkAPI) => {
    try {
      const response = await addNewAdjustmentApi(formatDecimals(event));
            await updateProductStockApi({
              id:event.product,
              p_opening_stock:event.p_opening_stock
            });
            thunkAPI.dispatch(getProducts());
      return response;
    } catch (error) {
      return error;
    }
  }
);


export const getProductAdjmtList = createAsyncThunk(
  "adjustment/getProductAdjmtList",
  async () => {
    try {
      const response = await getProductAdjmtListApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const productAdjmtDetailsById = createAsyncThunk(
  "adjustment/productAdjmtDetailsById",
  async (id :any) => {
    try {
      const response = productAdjmtDetailsByIdApi(id);
      return response;
    } catch (error) {
      return error;
    }
  }
);
