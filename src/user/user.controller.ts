class UserController{

    index(req, res) {
        res.send('Página do usuári0')
    }

    unique(req, res){
        res.send('Usuário único: ' + req.params.id)
    }
}

export default new UserController();

