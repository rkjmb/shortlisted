import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

const CustomCard = ({ id, Image: src, name, status, handleClick }) => {
    return (
        <Card className='pointer' onClick={() => handleClick(id)}>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={src}
                />
                <Card.Header>{name}</Card.Header>
                <Icon name={status === 'shortlisted' ? 'check' : status === 'rejected' ? 'close icon' : 'circle notch'} />
                <Card.Meta>{status}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default CustomCard
