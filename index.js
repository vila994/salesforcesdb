const express = require('express')
var path = require('path');
var serveStatic = require('serve-static');
const cls = require('continuation-local-storage');
const Sequelize = require('sequelize');
const database_url = 'postgres://mzokjilxcsengj:b98ec3f70ec87a4e9e801945fe51ccd46e81a0aa8d80918bb05d4c3e7dc83eb0@ec2-54-228-251-254.eu-west-1.compute.amazonaws.com:5432/d2lna5bd1plqbq';
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
