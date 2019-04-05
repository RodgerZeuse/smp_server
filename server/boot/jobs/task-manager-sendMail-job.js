
'use strict';
const Agenda = require('agenda');
var app = require('../../../server/server');
let senderAddress = "smp@gmail.com";

async function sendNotification(Taskmanager, ctx, reminder) {
  console.log('reminder',reminder);
  var conString = "mongodb://localhost:27017/smp_jobs";
  var agenda = new Agenda({
    db: {
      address: conString,
      collection: 'jobs'
    }
  });

  agenda.define('task-' + ctx.instance.id, (job, done) => {

    console.log("reminder job")
     app.models.RegisterUser.findById(ctx.instance.assignUserId,function(err, assignUser){
         if(err) console.log(err)
            console.log(assignUser.id);

            if(ctx.instance.reminderType === "email"){

                    let sendMail = async function(){
                        let task = await sendEmail(Taskmanager, ctx, assignUser.email);
                        console.log(task)
                    }
                try{
                    sendMail();
                }catch(err){
                    console.log(err)
                }
            }
     });

  
    done();
  });

  agenda.on('ready', () => {
    agenda.start();
    console.log('reminder',reminder);
    agenda.schedule(reminder, 'task-' + ctx.instance.id);
    // agenda.every('1 minutes', 'task-' + ctx.instance.id);
  });
  //   agenda.processEvery('1 minutes');

}

async function sendEmail(Taskmanager,ctx,email){
    var url  ='http://localhost:4200/membership/reset-password';
    var html = `
        <h3>You have reminder for your task<h3>
        <h4>Task<h4>
        ${ctx.instance.title}÷÷
        ${ctx.instance.description}÷÷
        `;

    Taskmanager.app.models.Email.send({
      to: email,
      from: senderAddress,
      subject: 'Task Reminder',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending  email',err);
      console.log('> sending email to:', email);
    });
  
}

const sendNotifications = {
    sendNotification: sendNotification,
    sendEmail:sendEmail
}
module.exports = sendNotifications;
