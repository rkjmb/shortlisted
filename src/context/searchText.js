import React, { useReducer, createContext } from 'react';
import { searchText } from '../data/initialState';


const initialState = {
    searchText
}

const SearchTextContext = createContext({
    searchText,
    setSearchText: () => { },
    resetSearchText: () => { }
})

function searchTextReducer(state, action) {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return {
                ...state, searchText: action.payload
            }
        case 'RESET_SEARCH_TEXT':
            return {
                ...state,
                searchText: searchText
            }
        default: return state;
    }
}

function SearchtextProvider(props) {
    const [state, dispatch] = useReducer(searchTextReducer, initialState);

    function setSearchText(searchText) {
        dispatch({
            type: 'SET_SEARCH_TEXT',
            payload: searchText
        })
    }

    function resetSearchText() {
        dispatch({
            type: 'RESET_SEARCH_TEXT'
        })
    }

    return <SearchTextContext.Provider
        value={{ searchText: state.searchText, setSearchText, resetSearchText }}
        {...props}
    />
}

export { SearchTextContext, SearchtextProvider };