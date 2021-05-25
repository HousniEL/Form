// implements all the CRUD operations create, read, update and delete the UserModel
const Validator = require('fastest-validator');
const UserModel = require('../models/userModule');

/* create an instance of the validator */
const userValidator = new Validator();

var userList = {};

/* use the same patterns as on the client to validate the request */
const passwordPattern = /^([a-zA-Z0-9!@#\$%\^&\*]{6})/;

const userSchema = {
    uid : { type : "string" },
    username : {type : "string"},
    email : {type : "email"},
    pword : {type : "string", pattern : passwordPattern}
};

class UserService {
    static create(data) {
        console.log(data);
        var vres = userValidator.validate(data, userSchema);
        // validation failed 
		if(!(vres === true))
		{
			let errors = {}, item;

			for(const index in vres)
			{
				item = vres[index];

				errors[item.field] = item.message;
			}
			
			throw {
			    name: "ValidationError",
			    message: errors
			};
		}

		let user = new UserModel(data.uid, data.username, data.email, data.pword);

        userList[data.uid] = user;

		return user;
    }

    static retrieve(uid) {
        if( userList[uid] != {} ) {
            return userList[uid];
        } else {
            return new Error("User not found");
        }
    }

    static update(uid, data){
        if( userList[uid] != {} ) {
            let user = userList[uid];
            Object.assign(user, data);
        } else {
            return new Error("User not found");
        }
    }

    static delete(uid) {
        if( userList[uid] != {} ) {
            delete userList[uid];
        } else {
            return new Error("User not found");
        }
    }
}

module.exports = UserService;