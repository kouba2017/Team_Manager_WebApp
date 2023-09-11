const Player=require('../models/player.model')

// READ ALL
module.exports.readAllPlayers= (req, res) => {
    Player.find({})
        .then(allPlayers=>{
            res.json(allPlayers);
        })
        .catch(err=>console.log(err))
}

// CREATE
module.exports.createPlayer= (req, res) => {
    console.log(req.body);
    Player.create(req.body)
        .then(newPlayer => {
            console.log("CREATED SUCCESSFULLY")
            res.json(newPlayer)
        })
        .catch(err => {
            console.log("SERVER ERROR")
            res.json(err)
        })
}
// READ ONE
module.exports.readOnePlayer= (req, res) => {
    Player.findById({_id:req.params.id})
        .then(onePlayer => res.json(onePlayer))
        .catch(err => res.json(err))
}

// UPDATE
module.exports.updatePlayer= (req, res) => {
    Player.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.json(err))
}

// DELETE
module.exports.deletePlayer=(req, res) => {
    Player.findByIdAndDelete({_id:req.params.id})
        .then(result => {
            res.json(result)
            console.log("deleted Successfully");
        })
        .catch(err => res.json(err))
}
