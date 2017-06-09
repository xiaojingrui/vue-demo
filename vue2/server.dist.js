var express = require('express');

var port = 8011;

var app = express();

/*模拟数据**/
var appData = require('./test/pc.json');
var test = appData;
var apiRoutes = express.Router();
  apiRoutes.post('/pc', function (req, res) {
    res.json({
      errno: 0,
      data: test
    });
  });
app.use('/api', apiRoutes);

/****--------------模拟数据结束-------------------------------*****/

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});