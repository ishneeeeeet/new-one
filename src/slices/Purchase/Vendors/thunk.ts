import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getVendors as getVendorsApi,
  addNewVendor as addNewVendorApi,
  updateVendor as updateVendorApi,
  updateVendorStatus as updateVendorStatusApi,
  getActiveVendors as getActiveVendorsApi
} from "../../../helpers/backend_helper";

export const getActiveVendors = createAsyncThunk(
  "vendors/getActiveVendors",
  async () => {
    try {
      const response = getActiveVendorsApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getVendors = createAsyncThunk(
  "vendors/getVendors",
  async () => {
    try {
      const response = getVendorsApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);


export const addNewVendor = createAsyncThunk(
  "vendors/addNewVendor",
  async (event :any) => {
    try {
      const response = addNewVendorApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateVender = createAsyncThunk(
  "vendors/updateVender",
  async (event :any) => {
    try {
      const response = updateVendorApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateVendorStatus = createAsyncThunk(
  "vendors/updateVendorStatus",
  async (event :any) => {
    try {
      const response = updateVendorStatusApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

// export const stateUpdateOnUnmount = createAsyncThunk(
//   "vendors/stateUpdateOnUnmount",
//   async () => {
//     try {
//      return true;
//     } catch (error) {
//       return error;
//     }
//   }
// );