import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme/themeSlice";
import axios from "axios";

import * as api from './config';
import { countryReducer } from "./features/countries/countriesSlice";
import { controlsReducer } from "./features/controls/controlsSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countryReducer,
        controls: controlsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    // подключаем axios как клиент для работы с fetch запросами и ссылки на получение как api.
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        serializableCheck: false,
    })
});

export default store;