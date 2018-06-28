const express = require('express')
var path = require('path');
var serveStatic = require('serve-static');
const cls = require('continuation-local-storage');
const Sequelize = require('sequelize');
const database_url = 'postgres://cqxhzlyqirpzta:7fc911990843d7cfcd5e80bd43f3d2f2a5b027f2bfb5815bba4e6569e67c873f@ec2-54-247-100-44.eu-west-1.compute.amazonaws.com:5432/d7t4ipaploosk6';
const db = new Sequelize(process.env.DATABASE_URL || database_url, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
});
const Op = Sequelize.Op

const app = express()
const _ = require('lodash')

const Case = db.define('case', {
  id : {type: Sequelize.STRING, unique: true, primaryKey: true}
},{
  freezeTableName: true,
  schema: 'salesforce',
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/search', (request, response) => {
  let tk = '';
  if(request.query !== undefined && request.query.searchtoken !== 'undefined'){
    tk = request.query.searchtoken || '';
  }
  const queryString = tk.replace(/[\\$'"]/g, "\\$&");
  handleQuery(request.query.searchtoken, response);

})

handleQuery = async function(queryToken, response) {

  let res = Case.findAll({
    attributes: ['id','subject','description','priority'],
    where: {
      subject: {
        [Op.iLike]: `%${queryToken}%`,
      }
    }});

  let result = await Promise.all([res])

  response.json({
    risultati: result[0]
  });
}

app.use(serveStatic(__dirname + '/dist'))

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
  next()
})

app.listen(process.env.PORT || 3000)
