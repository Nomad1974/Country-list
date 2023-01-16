import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectDetails, loadCountryWithName, clearDetails } from "./detailsSlice";

const useDetails = (name) => {
    const dispatch = useDispatch();
    const details = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryWithName(name));

        return () => {
            dispatch(clearDetails());
        }
    }, [name, dispatch]);

    return details
}

export default useDetails;