
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadCountries, selectAllCountries, selectCountriesInfo } from "./countriesSlice";

const useCountryList = () => {
    const dispatch = useDispatch();

    const countries = useSelector(selectAllCountries);
    const {status, error, quantity} = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!quantity) {
            dispatch(loadCountries());
        }
    }, [quantity, dispatch]);

    return [countries, {status, error, quantity}];
}

export default useCountryList;

