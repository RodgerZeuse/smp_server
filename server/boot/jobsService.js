// 'use strict'

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'smp_jobs';

// async function getJob(campaignId) {
//     try {
//     var datetime = new Date();
//     console.log('======',campaignId);
//     const jobs = await  MongoClient.connect(url,{ useNewUrlParser: true });
//     let db =  jobs.db('smp_jobs');
   
//     //     const ress =  await db.collection("jobs").find({$and:[{"name":{$regex:/campaignId/}},{"nextRunAt":{$lt:datetime}},{"failReason":null},{"lastRunAt":null}]}).toArray(function(err, res){
//     //     console.log(res)
        
//     //     jobs.close();
//     // });
//     console.log(ress)
//     return Promise.resolve(ress);
//     }catch(err){
//         console.log(err);
//         return Promise.reject(err);
//     }   
// }

// const jobServices = {
//     getJob:getJob
// }

// module.exports = jobServices;