const UserModel = require("../database/models/users.models.js");
const ValidateRegister = require("../validation/Register");
const bcrypt = require('bcryptjs')

const Register = async (req, res) => {
    const { errors, isValid } = ValidateRegister(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        UserModel.findOne({ email: req.body.email }).then(async(exist) => {
          if (exist) {
            errors.email = "user exist";
            res.status(404).json(errors);
          } else {
            const hash = bcrypt.hashSync(req.body.password, 10)//hashed password
            req.body.password = hash;
            req.body.role = "USER";
            await UserModel.create(req.body);
            res.status(200).json({ message: "success" });
          }
        });
      }
    } catch (error) {
      res.status(404).json(error.message);
    }
  };


module.exports = {
    Register
}