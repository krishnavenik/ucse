var express = require('express');
var router = express.Router();
// var consumer = require('../model/model');
var customer = require('../model/model')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function (req, res, next) {

  var newcustomer = new customer(req.body);
  newcustomer.save(
    function (err, data) {
      if (err) return console.error(err);
      console.log("success")
      res.send("success")
    }
  )
})


/* GET API call. */

router.get('/call',
  function (req,
    res, next) {

    customer.find({}, function (err, results) {

      if (err) {

        res.status(403).json({
          msg: "something bad",
          err
        })

      }

      else {

        res.status(200).json({
          msg: "user record fetched successfully", data: results
        })

      }

    })
  });
module.exports = router;
