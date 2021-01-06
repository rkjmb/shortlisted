import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderWidthText = () => (
    <div className='loader'>
        <Dimmer active>
            <Loader size='big'>Loading</Loader>
        </Dimmer>
    </div>
)

export default LoaderWidthText