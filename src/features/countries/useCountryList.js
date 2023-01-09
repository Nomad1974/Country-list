
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadCountries, selectCountriesInfo, selectVisibleCountries } from "./countriesSlice";
import { selectControls } from "../controls/controlsSlice";

const useCountryList = () => {
    const dispatch = useDispatch();
    const {search, region} = useSelector(selectControls);
    const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
    const {status, error, quantity} = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!quantity) {
            dispatch(loadCountries());
        }
    }, [quantity, dispatch]);

    return [countries, {status, error}];
}

export default useCountryList;

