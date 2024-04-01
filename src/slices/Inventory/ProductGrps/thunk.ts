import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getProductGrps as getProductGrpsApi,
  getProductGrpDetails as getProductGrpDetailsApi,
  addNewProductGrp as addNewProductGrpApi,
  updateProductGrp as updateProductGrpApi
} from "../../../helpers/backend_helper";


export const getProductGrps = createAsyncThunk(
  "productGrps/getProductGrps",
  async () => {
    try {
      const response = getProductGrpsApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getProductGrpDetails = createAsyncThunk(
  "productGrps/getProductGrpDetails",
  async (id: any) => {
    try {
      const response = await getProductGrpDetailsApi(id);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const addNewProductGrp = createAsyncThunk(
  "productGrps/addNewProductGrp",
  async (event :any) => {
    try {
      const response = addNewProductGrpApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateProductGrp = createAsyncThunk(
  "productGrps/updateProductGrp",
  async (event :any) => {
    try {
      const response = updateProductGrpApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);
