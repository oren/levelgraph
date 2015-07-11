var level = require("level-browserify");
var levelgraph = require("levelgraph");
var db = levelgraph(level("match"));

var medicalStuff = [
  {subject: "1", predicate: "firstName", object: "josh"},
  {subject: "1", predicate: "lastName", object: "almando"},
  {subject: "1", predicate: "address", object: "113 S Hollywood drive, Hollywood, CA 91223"},
  {subject: "1", predicate: "email", object: "josh122_almando@gmail.com"},
  {subject: "2", predicate: "firstName", object: "sara"},
  {subject: "2", predicate: "lastName", object: "belki"},
  {subject: "2", predicate: "address", object: "111 Grand Avenue Oakland"},
  {subject: "2", predicate: "email", object: "4belki_sara@yahoo.com"}
];

var patients = [
  {subject: "3", predicate: "firstName", object: "Mia"},
  {subject: "3", predicate: "lastName", object: "alfonzo"},
  {subject: "3", predicate: "address", object: "1910 Ocean Way Santa Monica, CA 90405"},
  {subject: "3", predicate: "email", object: "miaeee@test.com"}
];

var distances = [
  {subject: "3", predicate: "distance", object: "1", "miles": 11},
  {subject: "3", predicate: "distance", object: "2", "miles": 14}
];

db.put(distances, function(err) {
  if (err) {
    console.log(err);
    return;
  }
});

var stream = db.getStream({subject: "3", predicate: "distance"});

stream.on("data", function(data) {
    console.log('data', data);
});
