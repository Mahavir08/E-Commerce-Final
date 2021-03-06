const mongoose = require("mongoose");
const dotenv = require("dotenv");
// mongoose.Promise = global.Promise;

dotenv.config({ path: "config/config.env" });

const DB = process.env.DB_ATLAS;
// console.log(DB);

const connectDatabase = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) =>
      console.log(`Mongodb Connected With host: ${con.connection.host}`)
    )
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

module.exports = connectDatabase;
