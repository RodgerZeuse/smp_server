'use strict';
let loopBackContext = require('loopback-context');
module.exports = function(Container) {

    
    Container.uploadFile =   function(req,res,cb) {

        console.log('request query ==>',req.query)
        let network = req.query.network;
        
         Container.upload(req,res,{container: 'pics'},function(err,data) //container name & file location in s3 
        {
            

            if(err)console.log(err);
            else{
                console.log('====>',data.files.uploadFile);
               let dataa = [{
                container:data.files.uploadFile[0].container,
                name:data.files.uploadFile[0].name,
                type:data.files.uploadFile[0].type,
                originalFilename:data.files.uploadFile[0].originalFilename,
                size:data.files.uploadFile[0].size,
                network:network
               }];
              
               

  
                console.log(dataa)
                cb(err,dataa);
            //    return dataa
            }
            
        })
    };
     Container.remoteMethod('uploadFile',
      {
        isStatic:true,
        accepts: [
            
            {arg: 'req', type: 'object', 'http': {source: 'req'}},
            {arg: 'res', type: 'object', 'http': {source: 'res'}}
            
         ],
        http: { path: '/fileUpload', verb: 'Post' },
        returns: { arg: 'data', type: 'Object' }
      });
    
};
