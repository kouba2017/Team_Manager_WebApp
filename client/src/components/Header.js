import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to={'/players/list'} >Manage Players  </Link>|
            <Link to={'/status/game/1'} >  Manage Player Status</Link>
        </div>
    )
}

export default Header