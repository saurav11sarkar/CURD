const { postNotice, getAllNotice, getOneNotice, putOneNotice, deleteNotice } = require('../controller/notice.controller');

const notice = require('express').Router();


notice.post('/api/notice', postNotice);
notice.get('/api/notice', getAllNotice);
notice.get('/api/notice/:id', getOneNotice);
notice.put('/api/notice/:id', putOneNotice);
notice.delete('/api/notice/:id', deleteNotice);


module.exports = notice;