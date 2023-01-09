import { useDispatch } from "react-redux";
import { clearControls } from "./controlsSlice";
// очистка фильтров в header
const useCleanUp = () => {
    const dispatch = useDispatch();

    const cleanUp = () => dispatch(clearControls());
    
    return [cleanUp];
}

export default useCleanUp;