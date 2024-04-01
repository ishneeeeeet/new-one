import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

interface LeadStateType {
  leads: Array<any>;
  activeLeads: Array<any>;
  leadDetails: object;
  error?: string | object | null | undefined | unknown;
}
export const initialState: LeadStateType = {
  leads: [],
  activeLeads: [],
  leadDetails: {},
  error: {},
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    getActiveLeadsSuccess(state, action) {
      state.activeLeads = action.payload.data;
    },
    getLeadsSuccess(state, action) {
      state.leads = action.payload.data;
    },
    getLeadDetailsSuccess(state, action) {
      state.leadDetails = action.payload.data;
    },
    updateLeadSuccess(state, action) {
      state.leads = (state.leads || []).map((event: any) => {
        if (event.id + '' === action.payload.data.id + '') {
          return { ...event, ...action.payload.data }
        } else {
          return event
        }
      })
      toast.success(`Lead Updated Successfully.`)
    }
  }
});

export const {
  getActiveLeadsSuccess,
  getLeadsSuccess,
  getLeadDetailsSuccess,
  updateLeadSuccess
} = leadsSlice.actions


export default leadsSlice.reducer;