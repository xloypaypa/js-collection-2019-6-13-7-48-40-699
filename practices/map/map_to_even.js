'use strict';
function map_to_even(collection){
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    result.push(collection[i] * 2);
  }
  return result;
}
module.exports = map_to_even;
