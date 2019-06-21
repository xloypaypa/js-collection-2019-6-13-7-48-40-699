'use strict';

function grouping_count(collection) {
  const result = {};
  for (let i = 0; i < collection.length; i++) {
    result[collection[i]] = result[collection[i]] ? result[collection[i]] + 1 : 1;
  }
  return result;
}

module.exports = grouping_count;
