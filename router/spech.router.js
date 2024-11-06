const { getAllSpech, postSpech, getOneSpech, putSpech, deleteSpech } = require('../controller/spech.controller');

const spech = require('express').Router();

spech.get("/api/spech",getAllSpech)
spech.post("/api/spech",postSpech)
spech.get("/api/spech/:id",getOneSpech)
spech.put("/api/spech/:id",putSpech)
spech.delete("/api/spech/:id",deleteSpech)


module.exports = spech;