// после окончания не забыть вынести логику в отдельный файл
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountryWithName = createAsyncThunk(
    'details/loadCountriesWithName',
    (name, {extra:{client, api}}) => {
        // возвращаем пробелы в имя для отправки валидного запроса
        return client.get(api.searchByCountry(name.replace(/_/g, " ")));
        
    }
);
// получаем список стран соседей
export const loadNeighborsWithBorder = createAsyncThunk(
    'details/loadNeighbors',
    (borders, {extra: {client, api}}) => {
        return client.get(api.filterByCode(borders));
    }
);

const initialState = {
    currentCountry: null,
    neighbors: [],
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
            .addCase(loadNeighborsWithBorder.fulfilled, (state, action) => {
                state.neighbors = action.payload.data.map(country => country.name);
            })
    }
});

export const {clearDetails} = detailSlice.actions;
export const detailsReducer = detailSlice.reducer;

export const selectCurrentCountries = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;