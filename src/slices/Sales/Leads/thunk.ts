import { get } from "lodash";
import moment from "moment";
import { toast } from "react-toastify";
import {
  getActiveLeads as getActiveLeadsApi,
  getLeads as getLeadsApi,
  addLead as addLeadApi,
  getLeadDetailsById as getLeadDetailsByIdApi,
  updateLead as updateLeadStatusApi,
  getActiveLeadWithEstimated as getActiveLeadWithEstimatedApi,
  getMaxLeadNumber as getMaxLeadNumberApi
} from "../../../helpers/backend_helper";

import {
  getActiveLeadsSuccess,
  getLeadsSuccess,
  getLeadDetailsSuccess,
  updateLeadSuccess
} from "./reducer"


export const getActiveLeads = () => async (dispatch: any) => {
  try {
    const response = await getActiveLeadsApi();
    dispatch(getActiveLeadsSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}
export const getActiveLeadWithEstimated = () => async (dispatch: any) => {
  try {
    const response = await getActiveLeadWithEstimatedApi();
    dispatch(getActiveLeadsSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}


export const getLeads = () => async (dispatch: any) => {
  try {
    const response = await getLeadsApi();
    dispatch(getLeadsSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}

export const getLeadDetailsById = (id: any) => async (dispatch: any) => {
  try {
    const response = await getLeadDetailsByIdApi(id);
    dispatch(getLeadDetailsSuccess(response))
  } catch (error) {
    return error;
  }
};

export const addLead = (event: any, history: any) => async (dispatch: any) => {
  try {
    if (!event.id) {
      let maxLdNumber: any = await getMaxLeadNumberApi()
      maxLdNumber = get(maxLdNumber, '[0].attributes.ld_number', null)
      if (!maxLdNumber || !maxLdNumber.startsWith('LD' + moment().format('YYMM'))) {
        maxLdNumber = 'LD' + moment().format('YYMM') + '000'
      }
      event["ld_number"] = maxLdNumber.substr(0, 5) + (parseInt(maxLdNumber.substr(maxLdNumber.length - 4)) + 1);
    
    }
    await addLeadApi(event);
    toast.success("Lead Added Successfully.")
    history.push("/sales/leads");
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}

export const updateLead = (data: any, history: any, isStatusUpdate: boolean = false) => async (dispatch: any) => {
  try {
    const response = await updateLeadStatusApi(data);
    dispatch(updateLeadSuccess(response));
    if (isStatusUpdate) return response; 
    else history.push("/sales/leads");
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}