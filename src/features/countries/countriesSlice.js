import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
    'countries/loadCountries',
    (_, {
        extra: {client, api}
    }) => {
        return client.get(api.ALL_COUNTRIES)
    }
);

const initialState = {
    status: 'idle',
    error: null,
    entities: [],
};

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCountries.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountries.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(loadCountries.fulfilled, (state, action) => {
                state.status = 'received';
                state.entities = action.payload.data;
            })
    }
});

export const countryReducer = countrySlice.reducer;
// селекторы
export const selectAllCountries = (state) => state.countries.entities;

export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    quantity: state.countries.entities.length,
})