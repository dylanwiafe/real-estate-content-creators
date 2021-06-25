const express = require("express");
const cors = require("cors");
const listingRoutes = require("./routes/listing");
const middlewares = require("./middlewares/middlewares");
const app = express();

const port = 8001;
app.use(cors());
app.use(express.json());

app.use(middlewares.logRequest);
app.use(middlewares.jsonPostRequests);

app.use("/listing", listingRoutes);

app.listen(port, () => {});
