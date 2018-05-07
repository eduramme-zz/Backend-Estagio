var express = require('express');
var router = express.Router();
var controller = require('../controller/controller.js');

/* GET home page. */

// as routers estao na sequencia do documento
router.get('/urls/:id', controller.redirectUrl);
router.post('/users/:userid/urls', controller.addURL);
router.get('/stats', controller.status);
router.get('/users/:userId/stats', controller.userStats);
router.get('/stats/:id', controller.statsId);
router.delete('/urls/:id', controller.deleteUrl);
router.post('/users', controller.addUser);
router.delete('/user/:userId', controller.deleteUser);
router.get('/', controller.get);



router.get('/urls', controller.allUrls);
router.get('/:shortUrl', controller.shortUrlRedirect);
module.exports = router;
