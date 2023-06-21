const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));
app.get("/", (req, res) => {
    res.send("Helloo Worldsss");
});
app.get("/wordpro.html", (req, res) => {
    res.send("wordpro.html")
}); 
app.get("/contact", (req, res) => {
    res.send("This is a contact page");
});
app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});