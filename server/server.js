const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/enquiry", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  res.json({
    success: true,
    message: "Enquiry submitted successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});