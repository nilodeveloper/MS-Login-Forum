class UserBusiness{

    create(data, res){
        if(data.username == 'semnome'){
            throw 'Nome Impróprio'
        }
    }
}

export default new UserBusiness();

