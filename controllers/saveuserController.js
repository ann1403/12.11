const Ajv = require('ajv');
const UserModel = require("../models/userModel");
module.exports = {
    createOne: async(req, res) => {
        try {
            const { mail, name, surname, login, dob, pwd, phone } = req.body
            const new_user1 = await new UserModel({
                mail,
                name,
                surname,
                login,
                dob,
                pwd,
                phone
            });
            await new_user1.save();
            return data;
        } catch (err) {

        }
    }
}