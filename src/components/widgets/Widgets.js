import React from 'react'
import './Widgets.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoOutlinedIcon />
            </div>
            {newsArticle("React is back", "Top news - 9000 readers")}
            {newsArticle("Amazing Project", "Top news - 400 readers")}
            {newsArticle("Bitcoin Break at $22k", "Crypto news - 3.4k readers")}
            {newsArticle("Redux is Amazing", "Code news - 200 readers")}


        </div>
    )
}

export default Widgets