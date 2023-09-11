const PlayerController=require('../controllers/player.controller')

module.exports= app=>{
    app.get('/api/teams',PlayerController.readAllPlayers)
    app.post('/api/team',PlayerController.createPlayer)
    app.get('/api/team/:id',PlayerController.readOnePlayer)
    app.put('/api/team/:id',PlayerController.updatePlayer)
    app.delete('/api/team/:id',PlayerController.deletePlayer)
}