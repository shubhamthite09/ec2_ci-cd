const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req, res) => {
    try{
        res.status(200).json({isError:false,msg:"ok"});
    }catch(err){
        res.status(404).json({isError:true,msg:err.massage});
    }
});

app.get("/pk",(req, res) => {
    try{
        res.status(200).json({isError:false,msg:"pankaj is chutiya"}) ;
    }catch(err){
        res.status(404).json({isError:true,msg:err.massage});
    }
});

app.get("/ma",(req, res) => {
    try{
        res.status(200).json({isError:false,msg:"manish is chutiya"}) ;
    }catch(err){
        res.status(404).json({isError:true,msg:err.massage});
    }
});

app.listen(8900,()=>{
    console.log("running test server on " + 8900);
})