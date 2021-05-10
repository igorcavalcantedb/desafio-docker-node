// app.js
const mysql = require('mysql');

var http = require('http');
var dados= [] ;



const con = mysql.createConnection({
    host: 'database', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: 'root', // A senha do usuário. Ex: user123
    database: 'desafio' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.query('SELECT name FROM user', (err, rows) => {
  if (err) throw err
   dados= rows[0].name;
  console.log('User: ', rows[0].name, '\n\n')
})

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("<h1>Full Cycle Rocks!</h1> " + dados );
}).listen(8080);

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})