import axios from 'axios'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const PlayerList = (props) => {
    const {playerList,setPlayerList}=props
    const nav=useNavigate()
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
        border: 0,
        },
    }));
    useEffect(()=>{
        axios.get('http://localhost:8000/api/teams')
            .then(res=>{
                console.log(res.data);
                setPlayerList(res.data)
            })
            .catch(err=>console.log(err))
    },[])
    const removeFromDom=(id)=>{
        setPlayerList(playerList.filter(player=>player._id !== id))
    }
    const deletePlayer=(id)=>{
        axios.delete(`http://localhost:8000/api/team/${id}`)
            .then(()=>{
                removeFromDom(id)
                nav('/teams')
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>Player Name </StyledTableCell>
                            <StyledTableCell align="center">Preferred Position</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playerList.map((player,index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align='center' component="th" scope="row">{player.playerName}</StyledTableCell>
                                <StyledTableCell align='center'>{player.prefPos}</StyledTableCell>
                                <StyledTableCell align="center"> <Button variant="outlined" onClick={()=>deletePlayer(player._id)} startIcon={<DeleteIcon />}>Delete</Button></StyledTableCell>
                            </StyledTableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PlayerList