const { getAllCommittee, postCommittee, getOneCommittee, putCommittee, deleteCommittee } = require('../controller/committee.controller');

const committee = require('express').Router();

committee.get("/api/committee",getAllCommittee);
committee.post("/api/committee", postCommittee);
committee.get("/api/committee/:id",getOneCommittee);
committee.put("/api/committee/:id", putCommittee);
committee.delete("/api/committee/:id",deleteCommittee);


module.exports = committee;