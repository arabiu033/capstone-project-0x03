import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCategories from '../../api/api';

export const fetchNobel = createAsyncThunk('capstone/fetchNobel', async () => getCategories());

const nobelSlice = createSlice({
  name: 'nobelCategories',
  initialState: {
    loading: 'init',
    categories: [],
    id: '',
    count: 0,
  },
  reducers: {
    fieldLaureates: (state, action) => ({
      ...state,
      id: action.payload[0],
      count: action.payload[1],
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNobel.pending, (state) => ({ ...state, loading: 'Loading Api' }))
      .addCase(fetchNobel.fulfilled, (state, action) => (
        ({ ...state, categories: action.payload, loading: 'success' })))
      .addCase(fetchNobel.rejected, (state) => ({ ...state, loading: 'Failed to fetch API' }));
  },
});

export const { fieldLaureates } = nobelSlice.actions;
export default nobelSlice.reducer;
