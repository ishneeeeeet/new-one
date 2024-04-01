import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getWarehouses as getWarehousesApi,
  addNewWarehouse as addNewWarehouseApi,
  updateWarehouse as updateWarehouseApi,
  updateWarehouseStatus as updateWarehouseStatusApi,
  getActiveWarehouse as getActiveWarehouseApi
} from "../../../helpers/backend_helper";


export const getActiveWarehouse = createAsyncThunk(
  "warehouse/getActiveWarehouse",
  async () => {
    try {
      const response = getActiveWarehouseApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);getActiveWarehouseApi

export const getWarehouses = createAsyncThunk(
  "warehouse/getWarehouses",
  async () => {
    try {
      const response = getWarehousesApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const addNewWarehouse = createAsyncThunk(
  "warehouse/addNewWarehouse",
  async (event :any) => {
    try {
      const response = addNewWarehouseApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateWarehouse = createAsyncThunk(
  "warehouse/updateWarehouse",
  async (event :any) => {
    try {
      const response = updateWarehouseApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateWarehouseStatus = createAsyncThunk(
  "warehouse/updateWarehouseStatus",
  async (event :any) => {
    try {
      const response = updateWarehouseStatusApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);