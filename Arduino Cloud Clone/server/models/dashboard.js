const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

mongoose.connect(
  "mongodb+srv://rajessh781:R%40jesh2512@personal-blog.dtfxubi.mongodb.net/CodeBlog",
  { useNewUrlParser: true }
);
autoIncrement.initialize(connection);

const DashboardSchema = new mongoose.Schema({
  id: Number,
  data: Array,
});

// Add auto-increment to the 'id' field
DashboardSchema.plugin(autoIncrement.plugin, {
  model: "Dashboard",
  field: "id",
});

const DashboardModel = connection.model("Dashboard", DashboardSchema);

module.exports = DashboardModel;
