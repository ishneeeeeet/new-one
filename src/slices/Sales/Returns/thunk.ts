import { toast } from "react-toastify";
import {
  getSalesReturns as getSalesReturnsApi,
  getReturnDetailsById as getReturnDetailsByIdApi,
  addSalesReturns as addSalesReturnsApi,
  updateInvoiceProducts as updateInvoiceProductsApi
} from "../../../helpers/backend_helper";

import {
  getReturnsSuccess,
  getReturnDetailsSuccess,
  addReturn
} from "./reducer"


export const getSalesReturns = () => async (dispatch: any) => {
  try {
    const response = await getSalesReturnsApi();
    dispatch(getReturnsSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}

export const getReturnDetailsById = (id: any) => async (dispatch: any) => {
  try {
    const response = await getReturnDetailsByIdApi(id);
    dispatch(getReturnDetailsSuccess(response))
  } catch (error) {
    return error;
  }
};

export const addSalesReturn = (event: any, history: any) => async (dispatch: any) => {
  try {
    let productInsert:boolean = false;
    for (const a of event.products) {
      try {
        if (a.product &&  a["ivp_returned_quantity"]!=0) {
          productInsert= true;
          a["ivp_returned_quantity"] = (a.ivp_returned_quantity+parseInt(a.ivp_returned_quantity_added))
          const response = await updateInvoiceProductsApi(a);
        }
      } catch (error) {
        return error;
      }
    }
    if(productInsert){
      const req = { invoice_number: event.invoice_number.id, rt_date: event.rt_date, rt_products: event.products.map((elem: any) => elem.id), total_amount: event.total_amount }
      const response = await addSalesReturnsApi(req);
      toast.success("Sales Return Added Successfully.")
      history.push("/sales/return");
    }else{
      toast.warn("There is no quantity to return.")
    }
   
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}