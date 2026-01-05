import { useEffect, useState } from 'react'

const useDebounceSearch = ({ value, delay }) => {
    const [searchValue, setSearchValue] = useState(value)
    useEffect(() => {

        const i = setTimeout(() => {
            setSearchValue(value)
        }, delay);
        return () => clearTimeout(i)

    }, [delay, value])
    return searchValue
}

export default useDebounceSearch
