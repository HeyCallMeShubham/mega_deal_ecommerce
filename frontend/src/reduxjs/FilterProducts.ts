// filterProductsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedCategory: string;
}

interface FilterAction {
  prop: keyof FilterState;
  value: string;
}

const initialState: FilterState = {
  selectedCategory: "",
};

const filterProductsSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<FilterAction>) => {
      state[action.payload.prop] = action.payload.value;
    },
  },
});

export const { filterByCategory } = filterProductsSlice.actions;
export default filterProductsSlice.reducer;