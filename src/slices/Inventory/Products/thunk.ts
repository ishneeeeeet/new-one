import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatDecimals } from "src/slices/Layout/utils";

import {
  getProducts as getProductsApi,
  getProductDetailsById as getProductDetailsByIdApi,
  getActiveProducts as getActiveProductsApi,
  addNewProduct as addNewProductApi,
  getCategories as getCategoriesApi,
  addNewCategory as addCategoryApi,
  getUnits as getUnitsApi,
  addNewUnit as addUnitApi,
  updateProduct as updateProductApi
} from "../../../helpers/backend_helper";


export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await getProductsApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getProductDetailsById = createAsyncThunk(
  "products/getProductDetails",
  async (id: any) => {
    try {
      const response = await getProductDetailsByIdApi(id);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getActiveProducts = createAsyncThunk(
  "products/getActiveProducts",
  async () => {
    try {
      const response = await getActiveProductsApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (event: any) => {
    try {
      const response = await addNewProductApi(formatDecimals(event));
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async () => {
    try {
      const response = await getCategoriesApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const addNewCategory = createAsyncThunk(
  "products/addNewCategory",
  async (event :any) => {
    try {
      const response = await addCategoryApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getUnits = createAsyncThunk(
  "products/getUnits",
  async () => {
    try {
      const response = await getUnitsApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const addNewUnit = createAsyncThunk(
  "products/addNewUnit",
  async (event :any) => {
    try {
      const response = await addUnitApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (event :any) => {
    try {
      const response = await updateProductApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);
