import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

interface InvoiceStateType {
  purchaseOrderList: Array<any>;
  activePurchaseOrderList: Array<any>;
  shipmentReceiveds: Array<any>;
  purchaseOrderDetail: object;
  error?: string | object | null | undefined | unknown;
}
export const initialState: InvoiceStateType = {
  purchaseOrderList: [],
  activePurchaseOrderList: [],
  purchaseOrderDetail:{} ,
  shipmentReceiveds: [],
  error: {},
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    getActivePOSuccess(state, action) {
      state.activePurchaseOrderList = action.payload.data;
    },
    getPODetailSuccess(state, action) {
      state.purchaseOrderDetail = action.payload.data;
    },
    getPurchaseOrderSuccess(state, action) {
      state.purchaseOrderList = action.payload.data;
    },
    updatePurchaseSuccess(state, action){
      state.purchaseOrderList = (state.purchaseOrderList || []).map((event: any) => {
        if (event.id + '' === action.payload.data.id + '') {
          event.attributes.po_status = action.payload.data.attributes.po_status;
          return event
        } else {
          ;
          return event
        }
      })
  const updatedStatus = action.payload.data.attributes.po_status?"activated":"deactivated";
   toast.success(`Purchase order ${updatedStatus} successfully.`)
    },
    getShipmentReceivedsSuccess(state, action){
      state.shipmentReceiveds = action.payload.data;
    }
  }
});

export const {
  getPODetailSuccess,
  getPurchaseOrderSuccess,
  updatePurchaseSuccess,
  getActivePOSuccess,
  getShipmentReceivedsSuccess
} = purchaseSlice.actions


export default purchaseSlice.reducer;