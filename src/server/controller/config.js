var express = require('express');

//////////////////////////////////////////////////////////////////////////////////////////////
// Config controller
//////////////////////////////////////////////////////////////////////////////////////////////

var router = express.Router();

router.get('/config',
  function(req, res, next) {
    res.write(JSON.stringify(config.client));
    res.end();
    next();
  }
);

module.exports = router;