const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
    })
    .then((data) => {
      console.log(`MongoDb is connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabse;
