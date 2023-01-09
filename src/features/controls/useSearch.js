import { useSelector, useDispatch } from 'react-redux';
import { selectSearch, setSearch } from './controlsSlice';

const useSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);

    const handleSearch = (event) => {
        dispatch(setSearch(event.target.value));
    }

    return [search, handleSearch];
}

export default useSearch;