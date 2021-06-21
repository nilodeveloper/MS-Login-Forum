class UserBusiness{

    create(data, res){
        try{
            if(data.username == 'semnome'){
                throw 'Nome Impróprio'
            }
        }catch(e){
            res.status(400).send(e)
        }

    }
}

export default new UserBusiness();

