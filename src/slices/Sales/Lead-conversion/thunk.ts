import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getLeadConversion as getLeadConversionApi,
  addLeadEstimateProduct as addLeadEstimateProductApi,
  addLeadConversion as addLeadConversionApi,
  updateLeadWithEstimated as updateLeadWithEstimatedApi,
  getActiveEstimates as getActiveEstimatesApi,
  getMaxEstimateNumber as getMaxEstimateNumberApi
} from "../../../helpers/backend_helper";

import {
  getLeadConversionSuccess,
  getActiveEstimatesSuccess
} from "./reducer"
import { toast } from "react-toastify";
import { formatDecimals } from "src/slices/Layout/utils";
import moment from "moment";
import { get } from "lodash";

export const getLeadConversion = () => async (dispatch: any) => {
  try {
    const response = await getLeadConversionApi();
    dispatch(getLeadConversionSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}

export const getActiveEstimates = () => async (dispatch: any) => {
  try {
    const response = await getActiveEstimatesApi();
    dispatch(getActiveEstimatesSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}

export const addLeadConversion = (event: any, history: any) => async (dispatch: any) => {
  try {
    let lead_conversion_products: any[] = [];
    for (const a of event.products) {
      try {
        if(a.product){
          const response = await addLeadEstimateProductApi(formatDecimals(a));
          lead_conversion_products.push(response.data.id)
        }
      } catch (error) {
        return error;
      }
    }
    delete event.products
    event["lead_conversion_products"] = lead_conversion_products;
    if (!event.id) {
      let maxEtNumber: any = await getMaxEstimateNumberApi()
      maxEtNumber = get(maxEtNumber, '[0].attributes.lc_estimate_id', null)
      if (!maxEtNumber || !maxEtNumber.startsWith('ET' + moment().format('YYMM'))) {
        maxEtNumber = 'ET' + moment().format('YYMM') + '000'
      }
      event["lc_estimate_id"] = maxEtNumber.substr(0, 5) + (parseInt(maxEtNumber.substr(maxEtNumber.length - 4)) + 1);
    }
    await addLeadConversionApi(formatDecimals(event));
    await updateLeadWithEstimatedApi(event);
    toast.success("Lead Estimate added Successfully.")
    history.push("/sales/estimates");
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}