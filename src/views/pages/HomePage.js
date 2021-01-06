import React, { useState, useEffect, useContext } from 'react'

import CardGroup from '../components/CardGroup';
import { Header } from 'semantic-ui-react';

import { CandidatesContext } from '../../context/candidates';
import { SearchTextContext } from '../../context/searchText';

import { filterByKeyAndValue } from '../../util/genericFunctions'

const HomePage = (props) => {
    const [candidates, setcandidates] = useState(null)

    const { candidates: response } = useContext(CandidatesContext);

    const { searchText } = useContext(SearchTextContext);

    const filter = props.match.params.filter;

    const handleCardClick = (candidateId) => {
        props.history.push(`candidate/${candidateId}`);
    }

    useEffect(() => {
        setcandidates(filterByKeyAndValue(response, 'status', filter, searchText))
    }, [filter, setcandidates, response, searchText])

    if (!candidates) {
        return <Header as='h3'>Third Header</Header>
    }

    if (!candidates.length) {
        return <Header as='h3'>{`No candidates found ${searchText.trim() ? `for search text '${searchText}'` : ''}`}</Header>
    }

    return (
        <CardGroup data={candidates} handleClick={handleCardClick} />
    )
}

export default HomePage
