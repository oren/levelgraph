var level = require("level-browserify");
var levelgraph = require("levelgraph");

// just use this in the browser with the provided bundle
var db = levelgraph(level("payment"));

var payments = [
  { subject: "armando-112", predicate: "pay-july", object: "350" },
  { subject: "armando-112", predicate: "pay-jun", object: "230" }
];

db.put(payments, function(err) {
  if (err) {
    console.log(err);
    return;
  }
});

var stream = db.getStream({subject: "armando-112"});
stream.on("data", function(data) {
    console.log('data', data);
});


