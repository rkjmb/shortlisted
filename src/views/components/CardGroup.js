import React from 'react'
import { Card } from 'semantic-ui-react';

import CustomCard from './Card';

const CardGroup = ({ data, handleClick }) => {
    return (
        <Card.Group>
            {data.map(candidate => <CustomCard key={candidate.id} {...candidate} handleClick={handleClick} />)}
        </Card.Group>
    )
}

export default CardGroup;
