const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
app.use(cors());
const userRoutes = require("./routes/authRoutes");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRoutes);


app.get("/", (req, res) => {
  res.send("backend working properly 🚀");
});

app.use("/api/auth", require('./routes/authRoutes'));
app.use("/api/products", require('./routes/productRoutes'));
app.use("/api/orders", require('./routes/orderRoutes'));
app.use("/api/payment", require('./routes/paymentRoutes'));
app.use("/api/analytics", require('./routes/analyticsRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
