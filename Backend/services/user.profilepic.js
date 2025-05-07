const userProfilePic = require('../models/user.profile.pic');


module.exports.creatPost = async ({
    userProfilepic
}) => {
    if (!userProfilepic ){
        throw new Error('Only images are allowed (jpeg, jpg, png)');        
    }
    const user = userProfilePic.create({
        userProfilepic
    })

    return user;
}