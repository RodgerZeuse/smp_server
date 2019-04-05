
'use strict';
const Agenda = require('agenda');
var facebookService = require('../../facebookService');
var twitterService = require('../../twitterService');
const VERSION = 'v3.0';
var app = require('../../../server');



async function getPostAnalytics(fbPostId) {
  // console.log(ctx);
  var conString = "mongodb://localhost:27017/smp_jobs";
  var agenda = new Agenda({
    db: {
      address: conString,
      collection: 'jobs'
    }
  });

  agenda.define('post-' + fbPostId, (job, done) => {

    console.log('Get Post Analytics job');

    
   
  });

  agenda.on('ready', () => {

    agenda.start();
    // agenda.schedule(scheduledAt, 'post-' + fbPostId);
    agenda.every('10 minutes', 'post-' + fbPostId);
  });
    agenda.processEvery('10 minutes');

}



const postAnalytics = {
    getPostAnalytics: getPostAnalytics
}
module.exports = postAnalytics;
