"use client"
import {create} from 'zustand'

export const useStore = create((set)=>({
  navbar_text : "",
  
  setNavbarText : (text) => set(state => ({navbar_text:text})),
}))


