const UserModel = require("../database/models/users.models.js");

const Register = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.status(200).json({ message: "success" })

    } catch (error) {
           res.status(500).json(error)
    }


}


module.exports = {


    Register
}