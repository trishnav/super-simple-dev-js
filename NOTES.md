#NOTES

- JSON: Javascript Object Notation.
  it is a syntx which is similar to JS, but has LESS features.
  e.g.-> only supports single quotes and does not support functions.

  JSON syntax is more universal as it can be understood by almost every language.
  We also use it to store data.

  JSON.stringify(product2) // JS -> JSON
  const jsonString = JSON.stringify(product2)
  JSON.parse(jsonString) // JSON -> JS

- Taking a value inside an object and storing it inside a variable.

                                  // writing the below line

  const message = object.message; // is the same as
  const {message} = object;
