import React, { useReducer, createContext } from 'react';
import { candidates } from '../data/initialState';


const initialState = {
    candidates
}

const CandidatesContext = createContext({
    candidates,
    setCandidates: () => { },
    resetCandidates: () => { }
})

function candidatesReducer(state, action) {
    switch (action.type) {
        case 'SET_CANDIDATES':
            return {
                ...state, candidates: action.payload
            }
        case 'RESET_CANDIDATES':
            return {
                ...state,
                candidates: candidates
            }
        default: return state;
    }
}

function CandidatesProvider(props) {
    const [state, dispatch] = useReducer(candidatesReducer, initialState);

    function setCandidates(candidates) {
        dispatch({
            type: 'SET_CANDIDATES',
            payload: candidates
        })
    }

    function resetCandidates() {
        dispatch({
            type: 'RESET_CANDIDATES'
        })
    }

    return <CandidatesContext.Provider
        value={{ candidates: state.candidates, setCandidates, resetCandidates }}
        {...props}
    />
}

export { CandidatesContext, CandidatesProvider };