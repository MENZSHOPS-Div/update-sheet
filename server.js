import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/update-order", async (req, res) => {
  const { preordernumber } = req.body;
  const appScriptUrl = process.env.SCRIPT_ID;

  try {
    const response = await fetch(appScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ orderNumber })
    });

    const result = await response.json();
    res.json(result);
  } catch (err) {
    console.error("Error calling App Script:", err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
