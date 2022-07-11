const newsRouter=require('./news')
const siteRouter=require('./site')
const userRouter=require('./user')
function route(app){
    app.use('/news',newsRouter);
    app.use('/site',siteRouter);  
    app.use('/user',userRouter);    
}
module.exports=route