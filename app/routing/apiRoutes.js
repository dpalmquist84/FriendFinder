const path = require("path");



app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));

var friends = require("../data/friends")


module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    res.json(friends)
    console.log(`friends2: ${friends}`);


app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));

  });

  app.post("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
 
    console.log(`cleared: ${friends}`);
  });
});



  
  
  




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



