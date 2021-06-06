import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import '../App.css'



const Header = ({setTextSearch, setRateSearch}) => {   

    const handleChange = (e) => {
        setTextSearch(e.target.value)
    }

    // onStarClick={Function(nextValue, prevValue, name)}

    return (
            <header>
                <h1 className='title'>Watch it</h1>
                <Form.Control onChange={handleChange} className="searchBar" type="text" placeholder="What do you want to watch?" />
            </header>
    )

}

export default Header
