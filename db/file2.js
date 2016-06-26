const Neo4j = require('node-neo4j');

const db = new Neo4j('http://localhost:7474');

db.cypherQuery(
  'CREATE (somebody:Person { name: {name}, from: {company}, age: {age} }) RETURN somebody',
  {
    name: 'Ghuffran',
    company: 'Modulus',
    age: ~~(Math.random() * 100), // generate random age
  }, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log(result.data); // delivers an array of query results
    return console.log(result.columns); // delivers an array of names of objects getting returned
  }
);
