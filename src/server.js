constexpress = require('express');
constapp = express();
constpath = require('path');
app.use(express.static(__dirname + '/tpsaladejuego'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) 
{res.sendFile(path.join(__dirname + '/tpsaladejuego/index.html'));});
console.log(' successful!!');