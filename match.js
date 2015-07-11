var level = require("level-browserify");
var levelgraph = require("levelgraph");
var db = levelgraph(level("payment-PA"));

var distances = [
  {subject: "armando-112", predicate: "distance", object: "josh-939", "miles": 11},
  {subject: "armando-112", predicate: "distance", object: "mali-940" , "miles": 13}
];

db.put(distances, function(err) {
  if (err) {
    console.log(err);
    return;
  }
});

var stream = db.getStream({subject: "armando-112"});

stream.on("data", function(data) {
    console.log('data', data);
});
