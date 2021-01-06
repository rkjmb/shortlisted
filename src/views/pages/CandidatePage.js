import React, { useEffect, useState, useContext } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

import { CandidatesContext } from '../../context/candidates';

import { getCanidateById } from '../../util/genericFunctions';

const renderExtra = (id, status, handleClick) => {
    return < div className='ui two buttons' >
        {status !== 'shortlisted' && <Button id={id} name={'shortlisted'} onClick={handleClick} positive>
            Approve
        </Button>}
        {status !== 'rejected' && <Button id={id} name={'rejected'} onClick={handleClick} negative>
            Decline
        </Button>}
        {status !== 'pending' && <Button id={id} name={'pending'} onClick={handleClick} color='yellow' >
            Pending
        </Button>}
    </div >
}

const CandidatePage = (props) => {
    const [candidate, setcanidate] = useState(null)
    const { candidates, setCandidates } = useContext(CandidatesContext);
    const canidateId = props.match.params.id;

    useEffect(() => {
        let selectedCanidate = getCanidateById(candidates, canidateId);
        if (selectedCanidate) {
            setcanidate(selectedCanidate)
        }
        return () => {
            setcanidate(null);
        }
    }, [canidateId, candidates, setcanidate])

    const handleClick = (e) => {
        const { id, name } = e.target;
        let newCandidates = candidates.map(c => {
            if (c.id == id) {
                c.status = name;
            }
            return c
        })
        setCandidates(newCandidates);
        props.history.push('/pending')
    }

    if (!candidate) {
        return <div>Invalid candidate...</div>
    }

    return (
        <div className='cardWrapper'>
            <Card
                image={candidate.Image}
                header={candidate.name}
                meta={candidate.status}
                extra={renderExtra(candidate.id, candidate.status, handleClick)}
            />
            <Button icon onClick={props.history.goBack}>
                <Icon name='close' />
            </Button>
        </div>
    )
}

export default CandidatePage
