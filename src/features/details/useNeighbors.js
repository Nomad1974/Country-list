import { useDispatch, useSelector } from 'react-redux';
import { loadNeighborsWithBorder, selectNeighbors } from './detailsSlice';
import { useEffect } from 'react';

const useNeighbors = (borders = []) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if(borders.length) {
            dispatch(loadNeighborsWithBorder(borders))
        }
    }, [borders, dispatch]);
    
    return neighbors;
}

export default useNeighbors;