class SiteController{
    index(req,res){
        res.render('home')
    }
    //Get Show
    search(req,res){
        res.send('Search Here')
    }
}
module.exports=new SiteController;

// const newController=require('./NewsController')