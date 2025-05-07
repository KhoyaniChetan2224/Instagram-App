const userModel = require('../models/user.login.model');



module.exports.creatUser = async ({
    mobilnumber, fullname, password, email
}) => {
    if (!mobilnumber || !fullname || !password || !email ){
        throw new Error("All fields are required");        
    }
    const user = userModel.create({
        mobilnumber,
        fullname,
        password,
        email
    })

    return user;
}