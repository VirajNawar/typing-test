
import React, { useState } from 'react'
import AccountIcon from './AccountIcon'
import { Modal } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


function  Header() {

    
    const navigate = useNavigate();

    return (
    <div className='header'>
        <Link to='/'>
       <div className="logo" style={{cursor:'pointer', fontSize:'2rem'}}>
        TypIt
       </div>
        </ Link>
        <div className="icons">
            <AccountIcon />
        </div>
        </div>
  )
}

export default  Header