import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';
import Sidebar from './components/sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/login/login';
import { auth } from './firebase/firebase';
import Widgets from './components/widgets/Widgets';

function App() {
  //listens to any auth change , to persist state of user
const user = useSelector(selectUser)
const dispatch = useDispatch();

useEffect(()=>{
  // It is a listner which listens any authentication change
auth.onAuthStateChanged(userAuth=>{
  if(userAuth){
    //user id loggedin
    dispatch(login({
      email: userAuth.email,
      uid:   userAuth.uid,
      displayName: userAuth.displayName,
      photoURL:userAuth.photoURL
    })
    )
  }else{
    //user is logged out
    dispatch(logout())
  }
})
},[])

  return (
    <div className="app">
    <Header/>

    {!user ? 
    (<Login />) : 
    (
      <div className="app_body">
      <Sidebar/>
      <Feed/>
      <Widgets />
      </div>
    )}

     
    
    </div>
  );
}

export default App;
