"use strict";
var app = require("../../server/server");
module.exports = function(Post) {
  Post.observe("before save", async function(ctx, next) {
    console.log("post id before save ====>", ctx.instance);
  });

  Post.observe("after save", async function(ctx, next) {
    console.log("post id ====>", ctx.instance.campaignId);
    app.models.Campaign.find(
      { where: { id: ctx.instance.campaignId } },
      function(err, res) {
        if (err) {
          console.log(err);
        }
        // console.log('=====> status',res[0].status)
        // let status = res[0].status
        // app.models.Post.patchOrCreateWithWhere({"id":ctx.instance.id},{"status":status}, function(err, res){
        //     if(err){
        //       console.log('posts patch error',err);
        //       // throw err
        //     }else{
        //       console.log('post patch response',res);

        //     }
        // });
      }
    );

    next();
  });

  Post.changePostStatus = async function(newCampaign) {
    console.log("campaign ID =>", newCampaign.id);
    app.models.Post.find({ where: { campaignId: newCampaign.id } }, function(
      err,
      posts
    ) {
      console.log("posts =>", posts);
      for (let j = 0; j < posts.length; j++) {
        app.models.Post.patchOrCreateWithWhere(
          { id: posts[j].id },
          { status: newCampaign.status },
          function(err, res) {
            if (err) {
              console.log("posts patch error", err);
              // throw err
            } else {
              console.log("post patch response", res);
            }
          }
        );
      }
    });
  };

  Post.remoteMethod("changePostStatus", {
    isStatic: true,
    accepts: [{ arg: "changePostStatus", type: "object" }],
    returns: {},
    http: {
      path: "/changePostStatus",
      verb: "get"
    }
  });
};
