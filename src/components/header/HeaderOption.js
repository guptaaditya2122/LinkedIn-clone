import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './HeaderOption.css'

function HeaderOption({avatar,Icon,title,onClick}) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption_icon'/>}
        {avatar && 
            <Avatar className='headerOption_icon' src={user?.photoURL}></Avatar>
        }
        <h3 className="headerOption_title">
            {title}
        </h3>
    
    </div>
  )
}

export default HeaderOption
