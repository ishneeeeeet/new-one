import { get } from "lodash";
import moment from "moment";
import { toast } from "react-toastify";
import { formatDecimals } from "src/slices/Layout/utils";
import {
  getInvoices as getInvoicesApi,
  addInvoice as addInvoiceApi,
  getInvoiceDetailsById as getInvoiceDetailsByIdApi,
  updateInvoice as updateInvoiceApi,
  addInvoiceProducts as addInvoiceProductsApi,
  updateEstimateWithInvoiced as updateEstimateWithInvoicedApi,
  getMaxInvoiceNumber as getMaxInvoiceNumberApi
} from "../../../helpers/backend_helper";

import {
  getInvoicesSuccess,
  getInvoiceDetailsSuccess,
  updateInvoiceSuccess
} from "./reducer"


export const getInvoices = () => async (dispatch: any) => {
  try {
    const response = await getInvoicesApi();
    dispatch(getInvoicesSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}

export const getInvoiceDetailsById = (id: any) => async (dispatch: any) => {
  try {
    const response = await getInvoiceDetailsByIdApi(id);
    dispatch(getInvoiceDetailsSuccess(response))
  } catch (error) {
    return error;
  }
};

export const addInvoice = (event: any, history: any) => async (dispatch: any) => {
  try {
    let invoice_products: any[] = [];
    for (const a of event.products) {
      try {
        if(a.product){
          const response = await addInvoiceProductsApi(formatDecimals(a));
          invoice_products.push(response.data.id)
        }
      } catch (error) {
        return error;
      }
    }
    delete event.products
    event["iv_products"] = invoice_products;
    if (!event.id) {
      let maxIvNumber: any = await getMaxInvoiceNumberApi()
      maxIvNumber = get(maxIvNumber, '[0].attributes.iv_number', null)
      if (!maxIvNumber || !maxIvNumber.startsWith('IN' + moment().format('YYMM'))) {
        maxIvNumber = 'IN' + moment().format('YYMM') + '000'
      }
      event["iv_number"] = maxIvNumber.substr(0, 5) + (parseInt(maxIvNumber.substr(maxIvNumber.length - 4)) + 1);
    
    }
    await addInvoiceApi(formatDecimals(event));
    await updateEstimateWithInvoicedApi(event);
    toast.success("Invoice Created Successfully.")
    history.push("/sales/invoices");
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}
export const updateInvoice = (data: any, history: any, isStatusUpdate: boolean = false) => async (dispatch: any) => {
  try {
    const response = await updateInvoiceApi(data);
    dispatch(updateInvoiceSuccess(response));
    if (isStatusUpdate) return response; 
    else history.push("/sales/invoices");
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}