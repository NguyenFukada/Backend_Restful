require('dotenv').config()

const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
const connection = require('./config/database')

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config template engine
configViewEngine(app);

//config route
app.use('/',webRoutes)

//
// connection.query(
//     'SELECT * FROM Users u' ,
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         //console.log(fields); // fields contains extra meta data about results, if available
//     }
// );


app.listen(port, hostname, () => {
    console.log(`Server run on port ${port}`)
})