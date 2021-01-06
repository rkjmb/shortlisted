import React, { useEffect, useState } from 'react'
import { Input } from 'semantic-ui-react';

const Search = ({ setsearchText, placeholder }) => {
    const [debouncedTerm, setdebouncedTerm] = useState("")

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setsearchText(debouncedTerm);
        }, 500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [debouncedTerm, setsearchText])

    return (
        <Input icon='search' placeholder={placeholder} onChange={(e) => setdebouncedTerm(e.target.value)} value={debouncedTerm} />
    )
}

export default Search
