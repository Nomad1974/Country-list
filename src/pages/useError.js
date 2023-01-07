import { useSelector } from "react-redux";
import { selectCountriesInfo } from "../features/countries/countriesSlice";

export const useError = () => {
    const {error} = useSelector(selectCountriesInfo);

    return [error];
};
