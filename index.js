var level = require("level-browserify");
var levelgraph = require("levelgraph");

// just use this in the browser with the provided bundle
var db = levelgraph(level("payment-PA"));

var triplets = [
  { subject: "armando-112", predicate: "pay-july", object: "350" },
  { subject: "armando-112", predicate: "pay-jun", object: "230" }
];

db.put(triplets, function(err) {
  if (err) {
    console.log(err);
    return;
  }
});

// var stream = db.getStream({subject: "armando-112", predicate: "pay-july" });
// var stream = db.getStream({predicate: "pay-july"});
var stream = db.getStream({subject: "armando-112"});
stream.on("data", function(data) {
    console.log('data', data);
});
// db.get({ subject: "armando-112" }, function(err, list) {
//     console.log(list);
// });

