import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e86dfe4bb72f0a9c4f4ec6.mockapi.io/';

const initialState = {
  isOpenSignInModal: false,
  isOpenSignUpModal: false,
  isOpenBookingModal: false,
  isOpenMenuModal: false,
  modalData: null,
  error: null,
  isLoading: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenSignInModal: (state, { payload }) => {
      state.isOpenSignInModal = true;
      document.body.classList.add('add-overflov');
    },
    setOpenSignUpModal: (state, { payload }) => {
      state.isOpenSignUpModal = true;
      document.body.classList.add('add-overflov');
    },
    setOpenBookingModal: (state, { payload }) => {
      state.isOpenBookingModal = true;
      document.body.classList.add('add-overflov');
    },
    setOpenMenuModal: (state, { payload }) => {
      state.isOpenMenuModal = true;
      document.body.classList.add('add-overflov');
    },
    setCloseModal: (state, { payload }) => {
      state.isOpenSignInModal = false;
      state.isOpenSignUpModal = false;
      state.isOpenBookingModal = false;
      state.isOpenMenuModal = false;
      state.modalData = null;
    },
    setModalData: (state, { payload }) => {
      state.modalData = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  setOpenSignInModal,
  setOpenSignUpModal,
  setOpenBookingModal,
  setOpenMenuModal,
  setCloseModal,
  setModalData,
} = modalSlice.actions;
