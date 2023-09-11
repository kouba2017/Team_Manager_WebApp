import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'
import PlayerList from '../components/PlayerList'
import Header from '../components/Header'



const DisplayAll = () => {
    const [playerList,setPlayerList]=useState([])

    return (
        <div>
            <Header/>
            <legend  >
                <div  style={{display:'flex',justifyContent:'flex-end'}}><  Logout  /></div>
                <h1>Team</h1>
            </legend>    
            <Link  to={'/teams'} >List </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link  to={'/addPlayer'} >Add Player</Link>
            <br/><br/><br/><br/>
            <fieldset style={{display:'flex',justifyContent:'center'}}>
                <PlayerList playerList={playerList} setPlayerList={setPlayerList} />
            </fieldset>
        </div>
    )
}

export default DisplayAll