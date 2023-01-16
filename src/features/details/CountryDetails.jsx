import useDetails from "./useDetails";

import { Info } from "./Info";
import { Error } from "../../pages/Error";
import { Preloader } from "../preloaders/Preloader";


const CountryDetails = ({name = '', navigate}) => {

    const {currentCountry, status, error} = useDetails(name);

    return (  
        <>
            {status === 'loading' && <Preloader />}
            {error && <Error error={error}/>}
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </>
    );
}

export default CountryDetails;