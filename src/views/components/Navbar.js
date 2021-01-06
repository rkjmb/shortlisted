import React, { useState, useEffect, useContext } from 'react'
import { Menu } from 'semantic-ui-react';

import Search from './Search';

import { SearchTextContext } from '../../context/searchText';

import { useHistory } from "react-router-dom";

const Navbar = () => {
    let history = useHistory();
    const [activeItem, setactiveItem] = useState('candidates')
    const [searchText, setsearchText] = useState('')
    let location = history.location.pathname.split('/')[1];

    const { setSearchText } = useContext(SearchTextContext);

    useEffect(() => {
        setSearchText(searchText)
    }, [searchText])

    useEffect(() => {
        setactiveItem(location)
    }, [])

    const handleItemClick = (_, { name }) => {
        history.push(`/${name}`)
        setactiveItem(name)
    }

    return (
        <Menu pointing secondary>
            <Menu.Item
                name='pending'
                active={activeItem === 'pending'}
                onClick={handleItemClick}
                content='Candidates'
            />
            <Menu.Item
                name='shortlisted'
                active={activeItem === 'shortlisted'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='rejected'
                active={activeItem === 'rejected'}
                onClick={handleItemClick}
            />
            {location !== 'candidate' && <Menu.Menu position='right'>
                <Menu.Item>
                    <Search placeholder={'Search by candidate name'} setsearchText={setsearchText} />
                </Menu.Item>
            </Menu.Menu>}
        </Menu>
    )
}

export default Navbar
