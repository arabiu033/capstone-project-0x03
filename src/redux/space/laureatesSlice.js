import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLaureates } from '../../api/api';

export const fetchLaureates = createAsyncThunk('capstone/fetchLaureates', async (data) => {
  const res = await getLaureates(data.id, data.count);
  return res.data;
});

const laureatesSlice = createSlice({
  name: 'nobelLaureates',
  initialState: {
    loading: 'init',
    laureates: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLaureates.pending, (state) => ({ ...state, laureates: [], loading: 'Loading Api' }))
      .addCase(fetchLaureates.fulfilled, (state, action) => (
        ({ ...state, laureates: action.payload, loading: 'success' })))
      .addCase(fetchLaureates.rejected, (state) => ({ ...state, loading: 'Failed to fetch API' }));
  },
});

// export const {  } = laureatesSlice.actions;
export default laureatesSlice.reducer;
