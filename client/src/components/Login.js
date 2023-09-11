import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
// import SignInGoogle from './SignInGoogle'

const Login = () => {
    
    const [userLogin,setUserLogin]=useState({email:"",password:""})
    const [errArr,setErrArr]=useState('')
    const nav=useNavigate()
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login',userLogin,{withCredentials:true})
            .then(res=>{
                console.log(res.data);
                setUserLogin({email:"",password:""})
                setErrArr('')
                console.log('successful login');
                nav('/teams')

            })
            .catch(err=>{
                console.log(err)
                //setErrArr(err.response.data.error)
            })

        
    }
    return (
        <div className='form-style'>
            <h1>Login</h1>
            <form onSubmit={onSubmitHandler}>
                    <p>
                        <label>Email:</label><br/>
                        <input type="email" name='email' onChange={e=>setUserLogin({...userLogin,email:e.target.value})} value={userLogin.email}  />
                    </p><br/>
                    <p>
                        <label>Password:</label><br/>
                        <input type="password" name='password' onChange={e=>setUserLogin({...userLogin,password:e.target.value})} value={userLogin.password} />
                    </p><br/>
                    <p style={{color:'red'}} >{errArr}</p>
                    <button type="submit" style={{
                        backgroundColor: 'rgb(23,162,184)',
                        color: '#ffffff',
                        fontSize: '20px',
                        width: '150px',
                        height: '40px',
                        border:' 3px solid black',
                        boxShadow: '2px 4px rgb(0, 0, 0)',
                        marginLeft: '10px'
                    }}>Login</button><br/><br/>
            </form>
            <Link to={'/register'} >Create Account</Link><br/><br/>
            {/* <SignInGoogle/> */}
        </div>
    )
}

export default Login