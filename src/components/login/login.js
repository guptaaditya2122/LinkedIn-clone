import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';
import './login.css'

function Login() {

    const [form, setForm] =useState({
        name:'',
        profilePic:'',
        email:'',
        password:''
    })
    // use to dispatch some sction to redux store
    const dispatch =useDispatch()

    const onChange =(event)=>{
        const {name,value} = event.target
        setForm({...form , [name]:value})
    }
    const register=()=>{
        if(!form.name){
            return alert('Please enter full name!')
        }
        auth.createUserWithEmailAndPassword(form.email,form.password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: form.name,
                photoURL:form.profilePic
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName: form.name,
                    photoURL:form.profilePic
                }))
            })
        }).catch(error=> alert(error))
    }
    const loginToApp=(event)=>{
        event.preventDefault();
        
        auth.signInWithEmailAndPassword(form.email,form.password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }))
        }).catch(error=>alert(error))
    }

  return (
    <div className="login">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPFrtIue_lJCPp_BDiBxoK5QfN5YWsZb-TxpSx0AVqG9gRWHKNy_zqHWae8C97NfwLA&usqp=CAU'
        
        alt=''/>

        <form>
            <input placeholder='Full name' type='text' name='name' value={form.name} onChange={onChange}/>
            <input placeholder='Profile pic (optional)' name='profilePic' value={form.profilePic} onChange={onChange} type='text'/>
            <input placeholder='Email' type='email' value={form.email} name='email' onChange={onChange}/>
            <input placeholder='Password'value={form.password} name='password' type='password'onChange={onChange}/>
            <button type='submit' onClick={loginToApp}>Login</button>

        </form>
        <p>Not a memeber? <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login