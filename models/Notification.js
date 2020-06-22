const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

NotificationSchema.plugin(mongoosePaginate);
mongoose.model("Notification", NotificationSchema);
