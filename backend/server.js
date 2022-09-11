const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./config/database")

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabse()

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
 