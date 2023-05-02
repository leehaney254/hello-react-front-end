import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  greeting: [],
  error: '',
};

const fetchGreeting = createAsyncThunk('greeting/fetchgreeting', () => fetch('http://127.0.0.1:3000/api/v1/greetings')
  .then((res) => res.json()));

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(fetchGreeting.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        greeting: action.payload,
        error: '',
      }
    ));
    builder.addCase(fetchGreeting.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        greeting: [],
        error: action.error.message,
      }
    ));
  },
})


export default greetingSlice.reducer;
export { fetchGreeting };