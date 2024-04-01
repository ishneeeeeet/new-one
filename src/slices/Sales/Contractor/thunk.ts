import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getActiveContractor as getActiveContractorApi,
} from "../../../helpers/backend_helper";

export const getActiveContractor = createAsyncThunk(
  "contractor/getActiveContractor",
  async () => {
    try {
      const response = getActiveContractorApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);
