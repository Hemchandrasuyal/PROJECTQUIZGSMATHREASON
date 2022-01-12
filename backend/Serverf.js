var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors=require('cors')
app.use(express.urlencoded({extended:true})) 
app.use(cors())
app.use(express.json())
const Finals=require("./Models")
const Finalsm=require("./Modelsmaths")
const Finalsr=require("./Modelsreason")
const url = 'mongodb+srv://harshitsuyal4:Hem1234@cluster0.onqrj.mongodb.net/Final?retryWrites=true&w=majority';
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, 
useFindAndModify:false
   }
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    var urlencodedParser = bodyParser.urlencoded({ extended: true})

    app.post('/process_post',urlencodedParser,async(req,res)=>{
        let namee=req.body.name
       
    let scores=req.body.score
    
        const feed=new Finals({
            name:namee,
            score:scores
        })
            try{
             await feed.save();
             res.send({data:feed})
             console.log("Good boy")
             console.log(feed)
             
            }
            catch(err){
                console.log(err)
            }
        })
        app.post('/process_postmaths',urlencodedParser,async(req,res)=>{
            let namee=req.body.name
           
        let scores=req.body.scoreM
        
            const feed=new Finalsm({
                namem:namee,
                scorem:scores
            })
                try{
                 await feed.save();
                 res.send({data:feed})
                 console.log("Good boy")
                 console.log(feed)
                 
                }
                catch(err){
                    console.log(err)
                }
            })
            app.post('/process_postr',urlencodedParser,async(req,res)=>{
                let namee=req.body.namer
               
            let scores=req.body.scoreR
            
                const feed=new Finalsr({
                    namer:namee,
                    scorer:scores
                })
                    try{
                     await feed.save();
                     res.send({data:feed})
                     console.log("Good boy")
                     console.log(feed)
                     
                    }
                    catch(err){
                        console.log(err)
                    }
                })
    app.get("/readGs",async(req,res)=>{
    Finals.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
    res.send(result)
    })
    
    })
    app.get("/readmaths",async(req,res)=>{
        Finalsm.find({},(err,result)=>{
            if(err){
                res.send(err)
            }
        res.send(result)
        })
        
        })
        app.get("/readr",async(req,res)=>{
            Finalsr.find({},(err,result)=>{
                if(err){
                    res.send(err)
                }
            res.send(result)
            })
            
            })
    

var server = app.listen(process.env.PORT || 8085, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })