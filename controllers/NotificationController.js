const mongoose = require("mongoose");

const Notification = mongoose.model("Notification");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const notifications = await Notification.paginate({}, { page, limit: 50 });
    return res.json(notifications);
  },

  async store(req, res) {
    const notification = await Notification.create(req.body);
    return res.json(notification);
  },

};
