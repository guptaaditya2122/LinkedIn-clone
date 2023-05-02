import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice';
import './Sidebar.css'

function Sidebar() {
    const user =useSelector(selectUser);
    
    const recentItem = (topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360" alt="" />
                <Avatar src={user?.photoURL} className='sidebar_avatar'>
                    
                </Avatar>
                <h2>{user?.displayName}</h2>
                <h4>{user?.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statnumber">2543</p>
                </div>
                <div className="sidebar_stat">
                    <p>View on profile</p>
                    <p className="sidebar_statnumber">1234</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('Programming')}
                {recentItem('Software development')}
                {recentItem('Angular')}
                {recentItem('DSA')}
            </div>
        </div>
    )
}

export default Sidebar