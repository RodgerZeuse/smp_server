module.exports = function(app) {

    var Registeruser = app.models.RegisterUser;
    
    Registeruser.findOne({where: {username: 'Admin'}}, (err, users) => {
        if(err) throw(err);
        if (!users) {
            Registeruser.create([
                {username: 'Admin', email: 'admin@gmail.com', password: 'password',account_type:'Admin'}
            ], (err, users) => {
                if (err) {
                    console.log(err);
                    // throw(err)
                };
                
                var Role = app.models.Role;
                var RoleMapping = app.models.RoleMapping;

                RoleMapping.destroyAll();

                Role.findOne({name: 'admin'}, (err, role) => {

                    if (!role) {
                        Role.create({
                            name: 'admin'
                        }, (err, role) => {
                            if (err) throw(err);
                            console.log("New Role: ", role);
            
                            role.principals.create({
                                principalType: RoleMapping.USER,
                                principalId: users[0].id
                            }, (err, principal) => {
                                if (err) throw(err);
                            });
                        });
                    }
                    else {
                        role.principals.create({
                            principalType: RoleMapping.USER,
                            principalId: users[0].id
                        }, (err, principal) => {
                            if (err) throw(err);
                        });                            
                    }
                });
            });
        }
    });

}