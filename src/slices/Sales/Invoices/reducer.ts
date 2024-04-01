import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

interface InvoiceStateType {
  invoices: Array<any>;
  invoiceDetails: object;
  error?: string | object | null | undefined | unknown;
}
export const initialState: InvoiceStateType = {
  invoices: [],
  invoiceDetails: {},
  error: {},
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice(state, action) {
      state.invoices = action.payload.data;
    },
    getInvoicesSuccess(state, action) {
      state.invoices = action.payload.data;
    },
    getInvoiceDetailsSuccess(state, action) {
      state.invoiceDetails = action.payload.data;
    },
    updateInvoiceSuccess(state, action) {
      state.invoices = (state.invoices || []).map((event: any) => {
        if (event.id + '' === action.payload.data.id + '') {
          return { ...event, ...action.payload.data }
        } else {
          return event
        }
      })
      toast.success(`Invoice Updated Successfully.`)
    }
  }
});

export const {
  addInvoice,
  getInvoicesSuccess,
  getInvoiceDetailsSuccess,
  updateInvoiceSuccess
} = invoiceSlice.actions


export default invoiceSlice.reducer;