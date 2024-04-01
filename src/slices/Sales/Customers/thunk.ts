import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCustomers as getCustomersApi,
  addNewCustomer as addNewCustomerApi,
  updateCustomer as updateCustomerApi,
  updateCustomerStatus as updateCustomerStatusApi,
  getActiveCustomers as getActiveCustomersApi
} from "../../../helpers/backend_helper";

export const getCustomers = createAsyncThunk(
  "customers/getCustomers",
  async () => {
    try {
      const response = getCustomersApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getActiveCustomers = createAsyncThunk(
  "customer/getActiveCustomers",
  async () => {
    try {
      const response = getActiveCustomersApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const addNewCustomer = createAsyncThunk(
  "customer/addNewCustomer",
  async (event :any) => {
    try {
      const response = addNewCustomerApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async (event :any) => {
    try {
      const response = updateCustomerApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateCustomerStatus = createAsyncThunk(
  "customer/updateCustomerStatus",
  async (event :any) => {
    try {
      const response = updateCustomerStatusApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

