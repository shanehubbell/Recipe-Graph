const request = require('request');
const host = 'localhost';
const port = '3002';

const httpUrlForTransaction = `http://${host}:${port}/db/data/transaction/commit`;

const runCypherQuery = (query, params, callback) => {
  request.post({
    uri: httpUrlForTransaction,
    json: {
      statements: [{
        statement: query,
        parameters: params,
      }],
    },
  });
  callback();
};

runCypherQuery(
  'CREATE (sombody:Person {name: {name}, from: {company}, age: {age} }) RETURN somebody', {
    name: 'Ghuffran',
    company: 'Modulus',
    age: 44,
  }, (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      console.log(resp);
    }
  }
);
