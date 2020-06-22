const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(mongoosePaginate);
mongoose.model("User", UserSchema);
