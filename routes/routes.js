var Request = require('request')
var slack = require('../controllers/botkit')
module.exports = function(app) {
 app.post('/slack/receive', function(req,res){
//respond to Slack that the webhook has been received.
    res.status(200);
    console.log(req);
// Now, pass the webhook into be processed
    slack.controller.handleWebhookPayload(req, res)
  })
}