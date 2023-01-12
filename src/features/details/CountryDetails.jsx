import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectDetails, loadCountryWithName, clearDetails } from "./detailsSlice";

import { Info } from "./Info";
import { Error } from "../../pages/Error";
import { Preloader } from "../preloaders/Preloader";


const CountryDetails = ({name = '', navigate}) => {

    const dispatch = useDispatch();
    const {currentCountry, status, error} = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryWithName(name));

        return () => {
            dispatch(clearDetails());
        }
    }, [name, dispatch]);

    return (  
        <>
            {status === 'loading' && <Preloader />}
            {error && <Error error={error}/>}
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </>
    );
}

export default CountryDetails;