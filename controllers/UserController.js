const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  async index(req, res) {
    const {
      email,
      password
    } = req.body;
    User.findOne({ email, password }, function (err, user) {
      if(err) {
        res.status(500).json({
          status: 'error',
          err: err.message,
        });
      }
      else if(user){
        res.status(200).json({
          status: 'OK',
        });
      }
      else{
          res.status(403).json({
          status: 'Login Inválido',
        });
      }
    
    });
  },

  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  },

};
