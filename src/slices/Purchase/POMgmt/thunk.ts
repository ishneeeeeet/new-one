import { createAsyncThunk } from "@reduxjs/toolkit";


import {
  getPurchaseOrder as getPurchaseOrderApi,
  getMaxPoNumber as getMaxPoNumberApi,
  addPurchaseOrderProduct as addPurchaseOrderProductApi,
  addPurchaseOrder as addPurchaseOrderApi,
  getPOProductDetailsById as getPOProductDetailsByIdApi,
  updatePurchaseOrder as updatePurchaseOrderApi,
  getActivePurchaseOrders as getActivePurchaseOrdersApi,
  getShipmentReceiveds as getShipmentReceivedsApi,
  updatePOProduct as updatePOProductApi,
  addShipmentReceiveds as addShipmentReceivedsApi,
  updateProductStock as updateProductStockApi
} from "../../../helpers/backend_helper";

import {
  getActivePOSuccess,
  getPODetailSuccess,
  getPurchaseOrderSuccess,
  getShipmentReceivedsSuccess,
  updatePurchaseSuccess
} from "./reducer"
import { toast } from "react-toastify";
import { get } from "lodash";
import moment from "moment";
import { formatDecimals } from "src/slices/Layout/utils";


export const getPODetailsById = (id: any) => async (dispatch: any) => {
  try {
    const response = await getPOProductDetailsByIdApi(id);
    dispatch(getPODetailSuccess(response))
  } catch (error) {
    return error;
  }
};

export const getActivePurchaseOrders = () => async (dispatch: any) => {
  try {
    const response = await getActivePurchaseOrdersApi();
    dispatch(getActivePOSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}

export const getPurchaseOrder = () => async (dispatch: any) => {
  try {
    const response = await getPurchaseOrderApi();
    dispatch(getPurchaseOrderSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}

export const addPurchaseOrder = (event: any, history: any) => async (dispatch: any) => {
  try {
    let po_products: any[] = [];
    for (const a of event.products) {
      try {
        const response = await addPurchaseOrderProductApi(formatDecimals(a));
        po_products.push(response.data.id)

      } catch (error) {
        return error;
      }
    }
    delete event.products
    event["po_products"] = po_products;
    if (!event.id) {
      let maxPoNumber: any = await getMaxPoNumberApi()
      maxPoNumber = get(maxPoNumber, '[0].attributes.po_number', null)
      if (!maxPoNumber || !maxPoNumber.startsWith('PO' + moment().format('YYMM'))) {
          maxPoNumber = 'PO' + moment().format('YYMM') + '000'
      }
      event["po_number"] = maxPoNumber.substr(0, 5) + (parseInt(maxPoNumber.substr(maxPoNumber.length - 4)) + 1);
    }
    await addPurchaseOrderApi(formatDecimals(event));
    toast.success("Purchase order added Successfully.")
    history.push("/purchase/purchase-orders");
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}

export const updatePurchaseOrder = (event: any, history: any) => async (dispatch: any) => {
  try {
    let po_products: any[] = [];

    try {
      for (const a of event.products) {
        const response = await addPurchaseOrderProductApi(a);
        po_products.push(response.data.id)
      }
      delete event.products
      event["po_products"] = po_products;
      await updatePurchaseOrderApi(event);
      toast.success("Purchase order updated Successfully.")
      history.push("/purchase/purchase-orders");

    } catch (error) {
      return error;
    }

  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}



export const updatePOStatus = (data: any) => async (dispatch: any) => {
  try {
    const response = await updatePurchaseOrderApi(data);
    dispatch(updatePurchaseSuccess(response));
    return response;
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}


export const getShipmentReceiveds = () => async (dispatch: any) => {
  try {
    const response = await getShipmentReceivedsApi();
    dispatch(getShipmentReceivedsSuccess(response));
    return response;
  } catch (error) {
    return error;
  }
}

export const addShipmentReceiveds = async (event: any, history: any) => {
  try {
    let gr_product_details: any[] = [];
    for (const pp of event.products) {
      try {
        const ppObj = {
          id: pp.id,
          pp_received_quantity: pp.pp_received_quantity,
          pp_roll: pp.pp_roll,
          pp_dye_lot: pp.pp_dye_lot,
          pp_warehouse_location: pp.pp_warehouse_location,
          pp_location_in_warehouse: pp.pp_location_in_warehouse,
          p_opening_stock: pp.p_opening_stock
        }
        const response = await updatePOProductApi(ppObj);
        gr_product_details.push({ ...ppObj, p_name: pp.p_name, p_color: pp.p_color, p_id: pp.p_id, pp_ordered_quantity: pp.pp_ordered_quantity, pp_received_quantity: pp.pp_received_quantity_diff })

      } catch (error) {
        return error;
      }
    }
    for (const pp of event.products) {
      if (pp.p_opening_stock) {
        await updateProductStockApi({
          id: pp.p_id,
          p_opening_stock: pp.p_opening_stock
        });
      }
    }
    delete event.products
    event["gr_product_details"] = gr_product_details;
    await addShipmentReceivedsApi(event);
    toast.success("Goods Received Details Added Successfully.")
    history.push("/purchase/goods-received");
  } catch (error) {
    const e: any = error
    toast.error(e?.message ? e?.message : "Something went wrong.")
    return error;
  }
}