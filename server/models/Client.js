const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});
//Client is the name of the model
module.exports = mongoose.model("Client", ClientSchema);
