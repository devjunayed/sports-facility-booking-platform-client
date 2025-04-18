import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [] as string[],
  name: "",
  shortDescription: "",
  description: "",
  pricePerHour: 0,
  location: "",
};

const facilitySlice = createSlice({
  initialState,
  name: "facility",
  reducers: {
    setImages: (state, action) => {
      if (!state.images.includes(action.payload) ){
        state.images = [...state.images, action.payload];
      }
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setShortDescription: (state, action) => {
      state.shortDescription = action.payload;
    },
    setPricePerHour: (state, action) => {
      state.pricePerHour = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  setImages,
  setName,
  setDescription,
  setShortDescription,
  setPricePerHour,
  setLocation,
} = facilitySlice.actions;
export default facilitySlice.reducer;
