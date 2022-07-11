class UserController{
    index(req,res){
        res.send("User Hear")
    }
}

module.exports=new UserController