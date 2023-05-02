import React from 'react'
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './inputOptions/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './post/Post'
import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([])
    const [message, setMessage] = useState('');
    const onInputChange = (event) => {
        setMessage(event.target.value);
    }

    const sendPost = (event) => {

        event.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: message,
            // photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH57YywVQR_XO6lxGYLboLgDVFs1ZdliXHVA&usqp=CAU',
            photoUrl: user.photoURL,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('');
    }

    useEffect(() => {
        // onSnapshot creates a real time connection with firrebas db. Everytime any post gets added
        // or removed we can listen to that change
        db.collection("posts").orderBy('timeStamp','desc').onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                ))
            )
        })


    }, [])


    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={message} onChange={onInputChange} />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Vedio" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />

                </div>
            </div>
            <div>
                <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post key={id} name={name} description={description} message={message}
                        photoUrl={photoUrl} />
                ))}
                </FlipMove>
            </div>
        </div>
    )
}

export default Feed