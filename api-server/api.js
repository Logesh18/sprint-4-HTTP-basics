const express = require("express");
const app = express();
const cors = require("cors")
const PORT = 4000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({ origin: "*" }))

app.get("/", async (req, res) => {
  res.json({ message:"get request worked successfully", responsedHosturl:req.protocol + '://' + req.get('host')+req.url, responseStatus:200 });
});

app.post("/", async (req, res) => {
  res.json({ message:"post request worked successfully", responsedHosturl:req.protocol + '://' + req.get('host')+req.url, responseStatus:200, query:req.query.data });
});

app.put("/:data", async (req, res) => {
  res.json({ message:"put request worked successfully", responsedHosturl:req.protocol + '://' + req.get('host')+req.url, responseStatus:200, UpdatedRequest:req.params.data });
});
  
app.listen(process.env.PORT || PORT, console.log(`Server started on port ${PORT}`));