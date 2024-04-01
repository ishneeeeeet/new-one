import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

interface ReturnStateType {
  returns: Array<any>;
  returnDetails: object;
  error?: string | object | null | undefined | unknown;
}
export const initialState: ReturnStateType = {
  returns: [],
  returnDetails: {},
  error: {},
};

const returnSlice = createSlice({
  name: "returns",
  initialState,
  reducers: {
    addReturn(state, action) {
      state.returns = action.payload.data;
    },
    getReturnsSuccess(state, action) {
       state.returns = action.payload.data;
    },
    getReturnDetailsSuccess(state, action) {
      state.returnDetails = action.payload.data;
    },
    updateReturnSuccess(state, action) {
      state.returns = (state.returns || []).map((event: any) => {
        if (event.id + '' === action.payload.data.id + '') {
          return { ...event, ...action.payload.data }
        } else {
          return event
        }
      })
      toast.success(`Sales Return Updated Successfully.`)
    }
  }
});

export const {
  addReturn,
  getReturnsSuccess,
  getReturnDetailsSuccess,
  updateReturnSuccess
} = returnSlice.actions


export default returnSlice.reducer;