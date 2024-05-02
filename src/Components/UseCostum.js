import { useState, useRef, createContext, useContext, useEffect } from 'react';
function useFetch(url, params,) {
    const [data, setData] = useState('')
    return useEffect(() => {
        fetch(url).then(res => res)
    }, []);
}
