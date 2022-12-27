var express = require('express');
var router = express.Router();

const {mongodb,dbName,dbUrl} = require('./config')
const { mongoose , dataModel} = require('./schema')
var router = express.Router();
mongoose.connect(dbUrl)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
});

router.post('/post-data/', async(req,res) => {
  try {
    let details = await dataModel.create(req.body)
    res.send({
      statusCode : 200,
      message : "data added successfully"
    })
  }catch(error) {
    res.send({
      statusCode:500,
      message:"Internal Server Error",
    })
  }
})

module.exports = router;
