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

router.post('/post-data/', async(req,res) => {
  try {
    let details = await dataModel.create(req.body)
    console.log(details)
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
