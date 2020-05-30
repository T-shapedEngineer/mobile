var express = require('express');
var router = express.Router();
var moment = require('moment');
var randomstring = require('randomstring');
var monk = require('monk');
var db = monk('localhost:27017/Mobile');
var collection = db.get('mobiledata');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
// posting data
router.post('/postData', function(req, res) {
	var id = randomstring.generate({
	  length: 7,
	  charset: 'numeric'
	});
  var data = {
  date : moment(req.body.date).format('DD-MM-YYYY'),
	time : moment(req.body.time).format('hh:mm'),
	id1 : id,
	roll : req.body.roll,
	college : req.body.college,
	branch : req.body.branch,
	year : req.body.year,
	section : req.body.section,
	user : req.body.user,
	name : req.body.name,
	fathname : req.body.fathname,
	facname : req.body.facname,
	studnum : req.body.studnum,
	fathnum : req.body.fathnum,
	facnum : req.body.facnum,
	emplyid : req.body.emplyid,
	model : req.body.model,
	imei : req.body.imei,
	color : req.body.color,
	reason : req.body.reason,
	"status":"office"
  }
  collection.insert(data, function(err,docs){
  	if(err){
  		res.send(500);
  	}
  	else{
  		res.send(docs);
  	}
  });
});
// Get office Data
router.get('/getofficeData', function(req, res) {
	collection.find({"status":"office"}, function(err,docs){
	if(err){
  		res.send(500);
  	}
  	else{
  		res.send(docs);
  	}
	})
});
//update status
router.put('/updateData', function(req, res) {
	collection.update({"_id":req.params.id},{$set:{"status":"return"}}, function(err,docs){
	if(err){
  		res.send(500);
  	}
  	else{
  		res.send(docs);
  	}
	})
});
//Get return data
router.get('/getreturnData', function(req, res) {
	collection.find({"status":"return"}, function(err,docs){
	if(err){
  		res.send(500);
  	}
  	else{
  		res.send(docs);
  	}
	});
});
// Get All Data
router.get('/getData', function(req, res) {
	collection.find({}, function(err,docs){
	if(err){
  		res.send(500);
  	}
  	else{
  		res.send(docs);
  	}
	})
});
module.exports = router;
