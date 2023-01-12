// после окончания не забыть вынести логику в отдельный файл
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountryWithName = createAsyncThunk(
    'details/loadCountriesWithName',
    (name, {extra:{client, api}}) => {
        return client.get(api.searchByCountry(name));
    }
);

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
};

const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        clearDetails: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryWithName.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountryWithName.fulfilled, (state, action) => {
                state.status = 'received';
                state.currentCountry = action.payload.data[0];
            })
            .addCase(loadCountryWithName.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
    }
});

export const {clearDetails} = detailSlice.actions;
export const detailsReducer = detailSlice.reducer;

export const selectCurrentCountries = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;