import React, { useState } from 'react'
import Input from '@mui/material/Input';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';



const Create = (props) => {
    const {playerList,setPlayerList}=props
    const nav=useNavigate()
    const [newPlayer,setNewPlayer]=useState({playerName:"",prefPos:""})
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/team',newPlayer)
            .then(res=>{
                console.log(res.data);
                setPlayerList([...playerList,res.data])
                setNewPlayer({playerName:"",prefPos:""})
                nav('/teams')
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <legend  >
                {/* <div  style={{display:'flex',justifyContent:'flex-end'}}><  Logout  /></div> */}
                <h1>Team</h1>
            </legend>    
                <Link  to={'/teams'} >List </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to={'/addPlayer'} >Add Player</Link>
            <br/><br/><br/><br/>
            <fieldset>
                <form onSubmit={onSubmitHandler}>
                    <h2>Add Player</h2>
                    <br/><br/><br/>
                    Player Name: &nbsp;&nbsp;&nbsp;&nbsp;
                    <Input value={newPlayer.playerName} onChange={e=>setNewPlayer({...newPlayer,playerName:e.target.value})} />
                    <br/><br/><br/><br/>
                    Preferred Position: &nbsp;&nbsp;&nbsp;&nbsp;
                    <Input value={newPlayer.prefPos} onChange={e=>setNewPlayer({...newPlayer,prefPos:e.target.value})} />
                    <br/><br/><br/><br/>
                    <Button type='submit' variant='contained' color='primary' >Submit</Button>
                </form>
            </fieldset>
        </div>
    )
}

export default Create