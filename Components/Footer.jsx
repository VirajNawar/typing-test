import Select from 'react-select'
import { MenuItem } from '@mui/material'
import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { themeOptions } from '../Styles/theme'



const Footer = () => {

    const {setTheme} = useTheme();

  
    const handleThemeChange = (e)=>{
       
        setTheme(e.value);
    }

    
  return (
    <div className='footer'>
        <div className="footer-links">
           
        </div>   
        <div className="theme-options">

        <Select
        options={themeOptions}
        menuPlacement='top'
        onChange={handleThemeChange}
        defaultValue={themeOptions[0]}
        >

        </Select>
          
        </div> 

    </div>
  )
}

export default Footer