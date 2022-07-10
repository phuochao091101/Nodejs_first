class NewsController{
    index(req,res){
        res.render('news')
    }
    //Get Show
    show(req,res){
        res.send('NEWS DETAILS')
    }
}
module.exports=new NewsController;

// const newController=require('./NewsController')