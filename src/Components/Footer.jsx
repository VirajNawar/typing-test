import { MenuItem } from '@mui/material'
import React from 'react'
import Select from 'react-select'
import { useTheme } from '../Context/ThemeContext'
import { themeOptions } from '../Styles/theme'
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {

    const {setTheme,theme,defaultTheme} = useTheme();
    
    const handleThemeChange = (e)=>{
        localStorage.setItem('theme',JSON.stringify(e.value));
        setTheme(e.value);
    }
    
  return (
    <div className='footer'>

        <div className="instructions">
            <div className="hint">
                Press <kbd className='tab'>Tab</kbd> To Open Commands
            </div>
        </div>

        <div className="actual-footer">
            <div className="footer-links" >
                <a href='https://github.com/VirajNawar/typing-test-app' target="_blank" >
                    <GitHubIcon />
                </a>
            </div>   
            <div className="theme-options">

                <Select
                    options={themeOptions}
                    menuPlacement='top'
                    onChange={handleThemeChange}
                    defaultValue={{label:defaultTheme.label,value:defaultTheme}}
                    styles={{
                        control: (styles) => ({...styles,backgroundColor:theme.background, cursor:'pointer', borderColor:theme.title}),
                        singleValue: (styles) => ({...styles, color:theme.title}),
                        menu: styles => ({...styles,backgroundColor:theme.background})
                    }}
                />
            </div> 
        </div>

        

    </div>
  )
}

export default Footer