/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {

  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    // create an index for the storage by using hashing function
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // retrieve the 'bucket' for this particular index
    var bucket = storage[index];
    // if bucket doesnt exist yet
    if (!bucket) {
      // create it
      bucket = [];
      // insert it into hashTable storage
      storage[index] = bucket;
    }

    var override = false;
    // iterate through bucket to see if there are any conflicting key value pairs
    // if there are, override them
    for (var i = 0; i < bucket.length; i ++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        override = true;
      }
    }
    // if override is false,
    if (!override) {
      //create a new tuple in the bucket
      bucket.push([key, value]);
    }

    return this;

  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve()`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (!bucket) {
      return null;
    }
    for (var i = 0; i < bucket.length; i ++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return null;
  };

  result.remove = function(key) {
    // TODO: implement `remove()`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storageLimit[index];
    if (!bucket) {
      return null;
    }
    //iterate over the bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      //check to see if key is inside bucket
      if (tuple[0] === key) {
        //if it is, get rid of this tuple
        bucket.splice(i, 1);
        return tuple[1];
      }
    }
  };

  return result;
};
