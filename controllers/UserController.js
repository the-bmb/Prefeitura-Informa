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
      else if(user && user.approved){
        return res.status(200).json({
          status: 'OK',
        });
      }
      else{
        return res.status(403).json({
          status: 'Login Inválido',
        });
      }
    
    });
  },
  async toAprove(req, res) {
    User.find({ approved:false }, function (err, users) {
      if(err) {
        return res.status(500).json({
          status: 'error',
          err: err.message,
        });
      }
      else if(users){
        return res.status(200).json({
          status: 'OK',
          users
        });
      }
    });
  },
  async store(req, res) {
    try{
      req.body.approved = false;
      const user = await User.create(req.body);
      return res.status(200).json(user);
    }catch(err){
      return res.status(500).json({err});
    }
    
  },

  async update(req, res) {
    try{
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      return res.status(200).json(user);
    }catch(err){
      return res.status(500).json({err});
    }
  },

};
