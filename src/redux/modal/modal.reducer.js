import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e86dfe4bb72f0a9c4f4ec6.mockapi.io/';

const initialState = {
  isOpenSignInModal: false,
  isOpenSignUpModal: false,
  isOpenBookingModal: false,
  modalData: null,
  error: null,
  isLoading: false,
};

// export const getCarById = createAsyncThunk(
//   'cars/getById',
//   async (id, thunkApi) => {
//     try {
//       const { data } = await axios.get(`/cars/${id}`);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

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
    setCloseModal: (state, { payload }) => {
      state.isOpenSignInModal = false;
      state.isOpenSignUpModal = false;
      state.isOpenBookingModal = false;
      state.modalData = null;
    },
    setModalData: (state, { payload }) => {
      state.modalData = payload;
    },
  },
  //   extraReducers: builder => {
  //     builder
  //       .addCase(getCarById.fulfilled, (state, { payload }) => {
  //         state.isLoading = false;
  //         state.modalData = payload;
  //       })

  //       .addMatcher(isAnyOf(getCarById.pending), state => {
  //         state.isLoading = true;
  //         state.error = null;
  //       })
  //       .addMatcher(isAnyOf(getCarById.rejected), (state, { payload }) => {
  //         state.isLoading = false;
  //         state.error = payload;
  //       });
  //   },
});

export const modalReducer = modalSlice.reducer;
export const {
  setOpenSignInModal,
  setOpenSignUpModal,
  setOpenBookingModal,
  setCloseModal,
  setModalData,
} = modalSlice.actions;
