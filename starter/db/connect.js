
const moongose=require('mongoose')

const connectdb=(url)=>{
moongose
    .connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })

}

module.exports=connectdb
    