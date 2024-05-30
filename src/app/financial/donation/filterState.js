"use client"

import { create } from "zustand";

export const useDonationFilterStore = create((set) => ({
  fieldValues : ["DOJ", "Name", "Id", "Coupon", "Phone", "Email", "Status", "branch", "description"],
  dojOperator: [
    "Today",
    "Current week",
    "Current month",
    "Last two months",
    "Between",
  ],
  stringOperator: ["Starts With", "Equals to"],
  integerOperator: [">", "<", "="],
  statusOperator: ["Active", "Inactive", "Blocked"],
  filters: [],
  fieldValue : "",

  setFieldText : (text) => set(state => ({fieldValue:text})),
  setFilter : (filter)  => set(state =>  { return ({filters:[...state.filters,filter]} ) } ),
  deleteFilter : (index) => set(state => { const fil = [...state.filters]; fil.splice(index,1); return ({filters:[...fil]})}) 

}))




