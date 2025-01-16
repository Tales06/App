const express = require('express');
const router = express.Router();
const { getAllMeetings } = require('../controllers/meetController');


router.get('/meetings','<h2>ciao</h2>');
// router.get('/meetings',getAllMeetings);

module.exports = router;