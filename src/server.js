constexpress = require('express');
constapp = express();
constpath = require('path');
app.use(express.static(__dirname + '/TP-Sala-de-Juegos-ANGULAR-'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) 
{res.sendFile(path.join(__dirname + '/TP-Sala-de-Juegos-ANGULAR-/index.html'));});
console.log(' successful!!');