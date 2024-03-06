const express =require('express');

const routes = express.Router();


const servicefilecall = require('../service/render');
const controlfilecall = require('../controller/controller')

routes.get('/',servicefilecall.hari);
routes.get('/thankyou',servicefilecall.prasath);
routes.post('/api/post',controlfilecall.datacreate)
routes.get('/datasurl',servicefilecall.datasfile);
routes.get('/api/post',controlfilecall.getting)


module.exports = routes;