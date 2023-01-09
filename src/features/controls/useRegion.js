import { useSelector, useDispatch } from 'react-redux';
import { selectRegion, setRegion } from './controlsSlice';


const useRegion = () => {
    const dispatch = useDispatch();
    const region = useSelector(selectRegion);

    const handleSelect = (reg) => {
        //dispatch(setRegion(region ? region.value : ''))
        // сокращаем условие до более маленького при помощи опциональной цепочки.
        dispatch(setRegion(reg?.value || ''))
    }
    return [region, handleSelect];
}


export default useRegion;